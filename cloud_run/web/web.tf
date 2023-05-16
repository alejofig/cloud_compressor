provider "google" {
  project = "746411315164"
  region  = "us-central1"
}

resource "google_cloud_run_service" "web2" {
  name     = "web2"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "gcr.io/cloudmiso/web:latest"
      }
    }
  }
}

data "google_service_account" "web2" {
  account_id = google_cloud_run_service.web2.id
}

resource "google_project_iam_member" "pubsub_permissions" {
  project = "746411315164"
  role    = "roles/pubsub.publisher"
  member  = "serviceAccount:${data.google_service_account.web2.email}"
}

resource "google_project_iam_member" "storage_permissions" {
  project = "746411315164"
  role    = "roles/storage.objectAdmin"
  member  = "serviceAccount:${data.google_service_account.web2.email}"
}
