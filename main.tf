# Configuración de proveedor para GCP
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
  name = "my-network"
  auto_create_subnetworks = true
  }

# Creación de instancia de máquina virtual "web"
resource "google_compute_instance" "web" {
  name         = "web"
  machine_type = "n1-standard-1"
  zone = local.zone
  tags = ["web"]
  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"
    }
  }

  # Conexión a la red
  network_interface {
    network = google_compute_network.my-network.self_link
        access_config {
      nat_ip = google_compute_address.web.address
    }
  }
  depends_on = [
    google_compute_address.database
  ]
  metadata_startup_script = <<-EOF
    #!/bin/bash
    export DB_HOST="${google_compute_instance.database.network_interface.0.access_config.0.nat_ip}"
    export DB_PORT="5432"
    export DB_NAME="example"
    export DB_USER="example"
    export DB_PASSWORD="example"
    export DATABASE_URL="postgresql://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME"
    export CELERY_RESULT_BACKEND: redis://redis:6379/0
    export PUERTO_SMTP: 587
    export CELERY_BROKER_URL: redis://redis:6379/0
    export CORREO_ELECTRONICO: "clouduniandesmiso@hotmail.com"
    export SERVIDOR_SMTP: "smtp-mail.outlook.com"
    export USUARIO_SMTP: "clouduniandesmiso@hotmail.com"
    export PASSWORD_SMTP: "12uniandes12"
    export JWT_ALGORITHM: "HS256"
    export JWT_SECRET_KEY: "frase-secreta"
    sudo apt-get update
    sudo apt-get -y install git cron p7zip-full
    sudo apt-get install -y python3-pip
    git clone -b gcp https://github.com/alejofig/cloud_compressor.git
    cd cloud_compressor
    pip install --no-cache-dir -r requirements.txt
    export FLASK_APP=app.py
    gunicorn app:app -b 0.0.0.0:5000 --access-logfile -
    EOF
}

resource "google_compute_address" "web" {
  name = "web-ip"
}

resource "google_compute_address" "database" {
  name = "database-ip"
}
# Creación de instancia de máquina virtual "database"
resource "google_compute_instance" "database" {
  name = "database-address"
  machine_type = "n1-standard-1"
  zone = local.zone
  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"
    }
  }

  # Conexión a la red
  network_interface {
    network = google_compute_network.my-network.self_link
    access_config {
      nat_ip = google_compute_address.database.address
    }
  }
  metadata_startup_script = <<-EOF
    #!/bin/bash
    apt-get update
    apt-get -y install postgresql
    service postgresql start
    sudo -u postgres psql -c "CREATE USER example WITH PASSWORD 'example';"
    sudo -u postgres psql -c "CREATE DATABASE example OWNER example;"
    EOF
}

resource "google_compute_firewall" "allow-http-web" {
  name    = "allow-http-web"
  network = google_compute_network.my-network.self_link

  allow {
    protocol = "tcp"
    ports    = ["80", "8080", "8000", "5000"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags = [tolist(google_compute_instance.web.tags)[0]]
}

resource "google_compute_firewall" "allow-ssh-web" {
  name    = "allow-ssh-web"
  network = google_compute_network.my-network.self_link

  allow {
    protocol = "tcp"
    ports    = ["22"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags = [tolist(google_compute_instance.web.tags)[0]]
}

output "database_ip_address" {
  value = google_compute_instance.database.network_interface.0.access_config.0.nat_ip
}
output "web_ip_address" {
  value = google_compute_instance.web.network_interface.0.access_config.0.nat_ip
}