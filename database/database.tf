provider "google" {
  project = "725763982877"
  region  = "us-central1"
}

resource "google_sql_database_instance" "postgres-instance" {
  name             = "postgres-instance"
  database_version = "POSTGRES_13"

  settings {
    tier = "db-f1-micro"
    ip_configuration {
      ipv4_enabled       = true
      authorized_networks = ["0.0.0.0/0"]
    }
  }
}

resource "google_sql_database" "example" {
  name     = "example"
  instance = google_sql_database_instance.postgres-instance.name

  depends_on = [google_sql_database_instance.postgres-instance]
}

resource "google_sql_database_instance_user" "example-user" {
  name     = "example"
  password = "example"
  instance = google_sql_database_instance.postgres-instance.name

  depends_on = [google_sql_database_instance.postgres-instance]
}

resource "google_sql_user" "example-user-db-owner" {
  name     = "example"
  instance = google_sql_database_instance.postgres-instance.name
  password = "example"
}

resource "google_sql_database_instance_grant" "example-db-owner-grant" {
  database = google_sql_database.example.name
  instance = google_sql_database_instance.postgres-instance.name
  role     = google_sql_user.example-user-db-owner.name
  privileges {
    name = "ALL"
  }

  depends_on = [
    google_sql_database_instance_user.example-user,
    google_sql_user.example-user-db-owner,
    google_sql_database.example,
    google_sql_database_instance.postgres-instance
  ]
}

output "database_ip_address" {
  value = google_sql_database_instance.postgres-instance.ip_address
}
