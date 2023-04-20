provider "google" {
  project = "746411315164"
  region  = "us-central1"
}

data "google_compute_zones" "available" {}

locals {
  zone = data.google_compute_zones.available.names[0]
}

resource "google_compute_network" "my-network" {
  name = "my-network3"
  auto_create_subnetworks = true
}

resource "google_compute_address" "database" {
  name = "database-ip"
}

resource "google_compute_instance" "database" {
  name         = "database-address"
  machine_type = "n1-standard-1"
  tags         = ["database"]
  zone         = local.zone

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"
    }
  }

  # Conexión a la red
  network_interface {
    network = google_compute_network.my-network.self_link

    access_config {
      # Asigna la dirección IP pública a la instancia
      nat_ip = google_compute_address.database.address
    }
  }

  # Configuración de PostgreSQL para habilitar el acceso remoto a la base de datos
  metadata_startup_script = <<-EOF
    #!/bin/bash
    sudo apt-get update
    sudo apt-get -y install postgresql postgresql-contrib

    # Habilita la escucha de PostgreSQL en todas las interfaces de red
    sudo sed -i "s/#listen_addresses = 'localhost'/listen_addresses = '*'/g" /etc/postgresql/13/main/postgresql.conf

    # Agrega la regla de acceso en pg_hba.conf para permitir el acceso remoto a PostgreSQL
    sudo sh -c "echo 'host all all 0.0.0.0/0 md5' >> /etc/postgresql/13/main/pg_hba.conf"

    # Reinicia el servicio de PostgreSQL
    sudo service postgresql restart

    # Crea un usuario y una base de datos de ejemplo en PostgreSQL
    sudo -u postgres psql -c "CREATE USER example WITH PASSWORD 'example';"
    sudo -u postgres psql -c "CREATE DATABASE example OWNER example;"
  EOF
}

resource "google_compute_firewall" "allow-postgres-db" {
  name    = "allow-postgres-db"
  network = google_compute_network.my-network.self_link

  allow {
    protocol = "tcp"
    ports    = ["5432","22"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags = [tolist(google_compute_instance.database.tags)[0]]
}

output "database_ip_address" {
  value = google_compute_instance.database.network_interface.0.access_config.0.nat_ip
}
