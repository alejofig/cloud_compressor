provider "google" {
  project = "746411315164"
  region  = "us-central1"
}

resource "google_cloud_run_service" "web" {
  name     = "web"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "gcr.io/my-project/my-image:latest"
      }
    }
  }
}