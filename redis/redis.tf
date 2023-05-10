# Configuración de proveedor para GCP
provider "google" {
  project = "746411315164"
  region  = "us-central1"
}
data "google_compute_zones" "available" {}

resource "google_compute_address" "redis" {
  name = "redis-ip"
}

# Usa la zona por defecto "us-central1-a"
locals {
  zone = data.google_compute_zones.available.names[0]
}
# Creación de red
resource "google_compute_network" "my-network" {
  name                    = "my-network-redis"
  auto_create_subnetworks = true
}

resource "google_compute_instance" "redis" {
  name         = "redis-instance"
  machine_type = "n1-standard-1"
  zone         = local.zone

  boot_disk {
    initialize_params {
      image = "debian-11"
    }
  }
  service_account {
    email  = "default"
    scopes = ["https://www.googleapis.com/auth/pubsub"]
  }
  network_interface {
    network = google_compute_network.my-network.self_link
    access_config {
      # Asigna la dirección IP pública a la instancia
      nat_ip = google_compute_address.redis.address
    }
  }

  metadata_startup_script = <<-EOF
    sudo apt-get update
    sudo apt-get install -y redis-server
    sudo sed -i 's/bind 127.0.0.1 ::1/bind 0.0.0.0 ::1/' /etc/redis/redis.conf
    sudo systemctl restart redis.service
    sudo apt-get install -y python3-pip
    sudo apt-get install -y docker.io
    sudo curl -L "https://github.com/docker/compose/releases/download/v2.3.3/docker-compose-linux-x86_64" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    docker-compose --version
    git clone -b bucket_jcra https://github.com/alejofig/cloud_compressor.git
    sudo chmod -R 777 /cloud_compressor
    cd cloud_compressor
    sudo docker-compose -f demonio.yml up -d
    echo "terminado el script"

  EOF
  tags                    = ["redis"]
}

output "redis_ip_address" {
  value = google_compute_instance.redis.network_interface.0.access_config.0.nat_ip
}


resource "google_compute_firewall" "redis-ssh" {
  name    = "redis-ssh"
  network = google_compute_network.my-network.self_link

  allow {
    protocol = "tcp"
    ports    = ["6379", "22"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags   = ["redis"]
}
