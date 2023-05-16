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
        image = "gcr.io/cloudmiso/web:latest"
      }
    }
  }
}

data "google_service_account" "web" {
  account_id = google_cloud_run_service.web.id
}

resource "google_project_iam_member" "pubsub_permissions" {
  project = "746411315164"
  role    = "roles/pubsub.publisher"
  member  = "serviceAccount:${data.google_service_account.web.email}"
}

resource "google_project_iam_member" "storage_permissions" {
  project = "746411315164"
  role    = "roles/storage.objectAdmin"
  member  = "serviceAccount:${data.google_service_account.web.email}"
}
