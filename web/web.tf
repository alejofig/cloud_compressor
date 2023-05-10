provider "google" {
project = "746411315164"
region = "us-central1"
}

resource "google_compute_network" "my-network6" {
  name                    = "my-network6"
  auto_create_subnetworks = true
}

resource "google_compute_autoscaler" "foobar" {
name = "my-autoscaler"
zone = "us-central1-c"
target = google_compute_instance_group_manager.foobar.self_link

autoscaling_policy {
  max_replicas = 3
  min_replicas = 1
  cooldown_period = 60

  cpu_utilization {
  target = 0.3
  }
}
}

resource "google_compute_instance_template" "foobar" {
name = "my-instance-template"
machine_type = "n1-standard-1"
can_ip_forward = false
tags = ["web"]

  disk {
      source_image = "debian-cloud/debian-11"
    
  }

  network_interface {
  network = google_compute_network.my-network6.self_link
    access_config {
      // Ephemeral public IP
    }
  }
  service_account {
    email  = "default"
    scopes = ["https://www.googleapis.com/auth/devstorage.full_control","https://www.googleapis.com/auth/pubsub"]
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
    cd cloud_compressor
    sudo docker-compose up -d
    echo "Nuevo"
    EOF
}

resource "google_compute_target_pool" "foobar" {
name = "my-target-pool"
region = "us-central1"
}

resource "google_compute_instance_group_manager" "foobar" {
name = "my-igm"
zone = "us-central1-c"
version {
instance_template = google_compute_instance_template.foobar.self_link
name = "primary"
}
target_pools = [google_compute_target_pool.foobar.self_link]
base_instance_name = "terraform"
}


module "lb" {
    source = "GoogleCloudPlatform/lb/google"
    version = "2.2.0"
    region = "us-central1"
    name = "load-balancer"
    service_port = 80
    target_tags = ["my-target-pool"]
    network = google_compute_network.my-network6.self_link
}
output "load_balancer_default_ip" {
  description = "The external ip address of the forwarding rule for default lb."
  value       = module.lb.external_ip
}

  resource "google_compute_firewall" "ssh" {
    name    = "allow-ssh"
    network = google_compute_network.my-network6.self_link

    allow {
      protocol = "tcp"
      ports    = ["22"]
    }
    target_tags   = ["web"]

    source_ranges = ["0.0.0.0/0"]
  }


resource "google_compute_firewall" "allow-http-web3" {
  name    = "allow-http-web3"
  network = google_compute_network.my-network6.self_link

  allow {
    protocol = "tcp"
    ports    = ["80", "8080", "8000", "5000"]
  }
  target_tags   = ["web"]

  source_ranges = ["0.0.0.0/0"]
}


resource "google_compute_firewall" "allow-all-outbound" {
  name    = "allow-all-outbound"
  network = google_compute_network.my-network6.self_link

  allow {
    protocol = "tcp"
    ports    = ["0-65535"]
  }

  allow {
    protocol = "udp"
    ports    = ["0-65535"]
  }

  source_ranges = ["0.0.0.0/0"]
  target_tags   = ["web"]
}