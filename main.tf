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
  target_tags   = ["worker"]
}

resource "google_compute_firewall" "allow-ssh-web" {
  name    = "allow-ssh-web"
  network = google_compute_network.my-network.self_link

  allow {
    protocol = "tcp"
    ports    = ["22"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags   =["worker"]

}


resource "google_compute_instance_template" "worker" {
  name         = "worker"
  machine_type = "n1-standard-1"
  tags = ["worker"]
    service_account {
    email  = "default"
    scopes = ["https://www.googleapis.com/auth/devstorage.full_control","https://www.googleapis.com/auth/pubsub"]
  }
  disk {
    source_image = "debian-cloud/debian-11"
    auto_delete = true
  }
  network_interface {
  network = google_compute_network.my-network.self_link
    access_config {
      // Ephemeral public IP
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
    git clone -b pubsub https://github.com/alejofig/cloud_compressor.git
    sudo chmod -R 777 /cloud_compressor
    cd cloud_compressor
    sudo docker-compose -f docker-compose-worker.yml up -d
    echo "terminado el script"
    EOF
}

resource "google_compute_instance_group_manager" "example" {
  name = "group-workers"
  zone = "us-central1-c"
  base_instance_name = "worker"
  version {
  instance_template = google_compute_instance_template.worker.self_link
  }
}

resource "google_compute_autoscaler" "example" {
  name = "worker-autoscaler"
  target = google_compute_instance_group_manager.example.self_link
  zone = "us-central1-c"
  autoscaling_policy {
    cooldown_period = 60
    cpu_utilization {
      target = 0.3
    }
    # custom_metric_utilizations {
    #   metric = "pubsub.googleapis.com/subscription/num_undelivered_messages"
    #   filter = "metric.type=\"pubsub.googleapis.com/subscription/num_undelivered_messages\" resource.type=\"pubsub_subscription\" resource.label.subscription_id=\"${google_pubsub_subscription.example.id}\""
    #   utilization_target = 10
    # }
    # load_balancing_utilization {
    #   utilization_target = 0.8
    # }
    max_replicas = 3
    min_replicas = 1
  }
}