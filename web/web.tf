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
resource "google_compute_network" "my-network6" {
  name                    = "my-network6"
  auto_create_subnetworks = true
}


# Creación de instancia de máquina virtual "web"
resource "google_compute_instance_template" "web2" {
  name         = "web2"
  machine_type = "n1-standard-1"
  tags         = ["web"]
  disk {
      source_image = "debian-cloud/debian-11"
    
  }
  # Conexión a la red
  network_interface {
    network = google_compute_network.my-network6.self_link
    access_config {
      nat_ip = google_compute_address.web.address
    }
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
    git clone -b lb https://github.com/alejofig/cloud_compressor.git
    cd cloud_compressor
    sudo docker-compose up -d
    sudo apt-get -y install nfs-common
    sudo mkdir /cloud_compressor/uploads
    sudo mkdir /cloud_compressor/conversions
    sudo mount 34.172.107.146:/uploads /cloud_compressor/uploads
    sudo mount 34.172.107.146:/conversions /cloud_compressor/conversions
    echo "Nuevo"
    EOF
}

resource "google_compute_address" "web" {
  name = "web-ip"
}


resource "google_compute_firewall" "allow-http-web2" {
  name    = "allow-http-web2"
  network = google_compute_network.my-network6.self_link

  allow {
    protocol = "tcp"
    ports    = ["80", "8080", "8000", "5000"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags   = [tolist(google_compute_instance_template.web2.tags)[0],"web-pool2"]
}

resource "google_compute_firewall" "allow-ssh-web2" {
  name    = "allow-ssh-web2"
  network = google_compute_network.my-network6.self_link

  allow {
    protocol = "tcp"
    ports    = ["22"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags   = [tolist(google_compute_instance_template.web2.tags)[0],"web-pool2"]

}

resource "google_compute_target_pool" "web-pool2" {
name = "web-pool2"
region = "us-central1"
}

resource "google_compute_instance_group_manager" "web" {
name = "web-manager"
zone = data.google_compute_zones.available.names[0]
version {
instance_template = google_compute_instance_template.web2.self_link
name = "primary"
}
target_pools = [google_compute_target_pool.web-pool2.self_link]
base_instance_name = "web"
}

resource "google_compute_autoscaler" "web_autoscaler" {
  name                    = "web-autoscaler"
  target                  = google_compute_instance_group_manager.web.self_link
  zone                    = local.zone
  autoscaling_policy {
    min_replicas        = 1
    max_replicas        = 3
    cpu_utilization {
      target = 0.6
    }
  }
}

module "lb" {
source = "GoogleCloudPlatform/lb/google"
version = "2.2.0"
region = "us-central1"
name = "load-balancer"
service_port = 8000
target_tags = ["web-pool2"]
network = google_compute_network.my-network6.self_link
}
