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

resource "google_compute_instance" "redis" {
  name         = "redis-instance"
  machine_type = "n1-standard-1"
  zone         = local.zone

  boot_disk {
    initialize_params {
      image = "debian-11"
    }
  }

  network_interface {
    network = google_compute_network.my-network.self_link
  }

  metadata_startup_script = <<-EOF
    sudo apt-get update
    sudo apt-get install -y redis-server
    sudo sed -i 's/bind 127.0.0.1 ::1/bind 0.0.0.0 ::1/' /etc/redis/redis.conf
    sudo systemctl restart redis.service
  EOF
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
  depends_on = [google_compute_instance.redis, google_compute_instance.database]
  # Conexión a la red
  network_interface {
    network = google_compute_network.my-network.self_link
        access_config {
      nat_ip = google_compute_address.web.address
    }
  }

  metadata_startup_script = <<-EOF
    #!/bin/bash
    echo "empezando el script"
    export DATABASE_URL="postgresql://example:example@${google_compute_instance.database.network_interface.0.access_config.0.nat_ip}:5432/example"
    export CELERY_RESULT_BACKEND=redis://redis:6379/0
    export PUERTO_SMTP=587
    export CELERY_BROKER_URL=redis://redis:6379/0
    export CORREO_ELECTRONICO="clouduniandesmiso@hotmail.com"
    export SERVIDOR_SMTP="smtp-mail.outlook.com"
    export USUARIO_SMTP="clouduniandesmiso@hotmail.com"
    export PASSWORD_SMTP="12uniandes12"
    export JWT_ALGORITHM="HS256"
    export JWT_SECRET_KEY="frase-secreta"
    sudo apt-get update
    sudo apt-get -y install git cron p7zip-full
    sudo apt-get install -y python3-pip
    sudo apt-get install -y docker.io
    sudo curl -L "https://github.com/docker/compose/releases/download/v2.3.3/docker-compose-linux-x86_64" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    docker-compose --version
    git clone -b gcp https://github.com/alejofig/cloud_compressor.git
    cd cloud_compressor
    sudo docker-compose up -d
    EOF
}

resource "google_compute_address" "web" {
  name = "web-ip"
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


output "web_ip_address" {
  value = google_compute_instance.web.network_interface.0.access_config.0.nat_ip
}

output "redis_ip_address" {
  value = google_compute_instance.redis.network_interface.0.network_ip
}



####### DATABASE


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


###### END DATABASE