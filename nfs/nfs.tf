# Configuración de proveedor para GCP
provider "google" {
  project = "725763982877"
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

resource "google_compute_address" "nfs" {
  name = "nfs-ip"
}




resource "google_compute_instance" "nfs" {
  name         = "file-server"
  machine_type = "n1-standard-1"
  zone         = local.zone

  boot_disk {
    initialize_params {
      image = "debian-11"
    }
  }

  network_interface {
    network = google_compute_network.my-network.self_link
    access_config {
      # Asigna la dirección IP pública a la instancia
      nat_ip = google_compute_address.nfs.address
    }
  }

  metadata_startup_script = <<-EOF
    sudo apt-get update
    sudo apt-get install -y nfs-kernel-server
    sudo mkdir /uploads
    sudo mkdir /conversions
    sudo chmod 777 /uploads
    sudo chmod 777 /conversions
    sudo sh -c "echo '/uploads *(rw,sync,no_subtree_check)' >> /etc/exports"
    sudo sh -c "echo '/conversions *(rw,sync,no_subtree_check)'>> /etc/exports"
    sudo exportfs -a 
    sudo systemctl restart nfs-kernel-server
  EOF
  tags                    = ["nfs"]
}

output "nfs_ip_address" {
  value = google_compute_instance.nfs.network_interface.0.access_config.0.nat_ip
}


resource "google_compute_firewall" "nfs-ssh" {
  name    = "nfs-ssh"
  network = google_compute_network.my-network.self_link

  allow {
    protocol = "tcp"
    ports    = ["2049", "22"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags   = ["nfs"]
}
