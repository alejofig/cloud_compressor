resource "google_compute_network" "network" {
  name                    = "load-balancer-module-network"
  auto_create_subnetworks = "false"
}

resource "google_compute_subnetwork" "subnetwork" {
  name          = "load-balancer-module-subnetwork"
  region        = "us-central1"
  network       = google_compute_network.network.self_link
  ip_cidr_range = "10.0.0.0/16"
}

resource "google_compute_router" "router" {
  name    = "load-balancer-module-router"
  region  = "us-central1"
  network = google_compute_network.network.self_link
}

module "cloud_nat" {
  project_id = "746411315164"
  region     = "us-central1"
  name       = "load-balancer-module-nat"
  source     = "terraform-google-modules/cloud-nat/google"
  version    = "~> 2.2"
  router     = google_compute_router.router.name
}