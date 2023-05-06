# Configuración de proveedor para juanca
provider "google" {
  project = "746411315164"
  region  = "us-central1"
}
data "google_compute_zones" "available" {}

# Usa la zona por defecto "us-central1-a"
locals {
  zone = data.google_compute_zones.available.names[0]
}
# Creación de red
resource "google_compute_network" "my-network" {
  name                    = "my-network"
  auto_create_subnetworks = true
}


resource "google_compute_address" "worker" {
  name = "worker-ip"
}



resource "google_compute_firewall" "allow-http-web" {
  name    = "allow-http-web"
  network = google_compute_network.my-network.self_link

  allow {
    protocol = "tcp"
    ports    = ["80", "8080", "8000", "5000"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags   = [tolist(google_compute_instance.worker.tags)[0]]
}

resource "google_compute_firewall" "allow-ssh-web" {
  name    = "allow-ssh-web"
  network = google_compute_network.my-network.self_link

  allow {
    protocol = "tcp"
    ports    = ["22"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags   =[tolist(google_compute_instance.worker.tags)[0]]

}





### WORKER
resource "google_compute_instance" "worker" {
  name         = "worker"
  machine_type = "n1-standard-1"
  zone         = local.zone
  tags         = ["worker"]
  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"
    }
  }
  service_account {
    email  = "default"
    scopes = ["https://www.googleapis.com/auth/devstorage.full_control"]
  }
  metadata_startup_script = <<-EOF
    #!/bin/bash
    echo "empezando el script"
    sudo apt-get update
    sudo apt-get -y install git cron p7zip-full
    sudo apt-get install -y python3-pip
    sudo apt-get install -y docker.io
    sudo curl -L "https://github.com/docker/compose/releases/download/v2.3.3/docker-compose-linux-x86_64" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    docker-compose --version
    git clone -b bucket_jcra https://github.com/alejofig/cloud_compressor.git
    sudo chmod -R 777 /cloud_compressor
    cd cloud_compressor
    sudo docker-compose -f docker-compose-worker.yml up -d
    echo "Nuevo"
    EOF


  # Conexión a la red
  network_interface {
    network = google_compute_network.my-network.self_link
    access_config {
      nat_ip = google_compute_address.worker.address
    }
  }
}
### WORKER


### Nfs

###