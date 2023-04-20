#!/bin/bash
cd database
# Ejecutar los comandos de Terraform
terraform init
terraform apply -auto-approve

# Esperar hasta que Terraform termine de aplicar los cambios
while [ $(terraform plan -detailed-exitcode | grep -o "exit code [0-9]*" | grep -o "[0-9]*") -eq 2 ]; do
  echo "Esperando a que Terraform termine de aplicar los cambios de la base de datos ..."
  sleep 5
done
# Obtener el valor del output de Terraform y asignarlo a una variable
database_id=$(terraform output -raw database_ip_address)

cd ..
cd redis

terraform init
terraform apply -auto-approve

# Esperar hasta que Terraform termine de aplicar los cambios
while [ $(terraform plan -detailed-exitcode | grep -o "exit code [0-9]*" | grep -o "[0-9]*") -eq 2 ]; do
  echo "Esperando a que Terraform termine de aplicar los cambios de redis ..."
  sleep 5
done
redis_ip=$(terraform output -raw redis_ip_address)
cd ..


sed -i "s#DATABASE_URL: postgresql://example:example@.*:5432/example#DATABASE_URL: postgresql://example:example@${database_id}:5432/example#" docker-compose.yml
sed -i "s#CELERY_RESULT_BACKEND: redis://.*:6379/0#CELERY_RESULT_BACKEND: redis://${redis_ip}:6379/0#" docker-compose.yml
sed -i "s#CELERY_BROKER_URL: redis://.*:6379/0#CELERY_BROKER_URL: redis://${redis_ip}:6379/0#" docker-compose.yml

sed -i "s#DATABASE_URL: postgresql://example:example@.*:5432/example#DATABASE_URL: postgresql://example:example@${database_id}:5432/example#" docker-compose-worker.yml
sed -i "s#CELERY_RESULT_BACKEND: redis://.*:6379/0#CELERY_RESULT_BACKEND: redis://${redis_ip}:6379/0#" docker-compose-worker.yml
sed -i "s#CELERY_BROKER_URL: redis://.*:6379/0#CELERY_BROKER_URL: redis://${redis_ip}:6379/0#" docker-compose-worker.yml

sed -i "s/export DATABASE_URL=postgresql://example:example@.*:5432/example#DATABASE_URL: postgresql://example:example@${database_id}:5432/example#" process_files.sh
sed -i "s/export redis://.*:6379/0#CELERY_RESULT_BACKEND: redis://${redis_ip}:6379/0#" process_files.sh
sed -i "s/export CELERY_BROKER_URL=redis://.*:6379/0#CELERY_BROKER_URL: redis://${redis_ip}:6379/0#" process_files.sh

git add .
git commit -m "Actualización de variables de entorno con Terraform"
git push


# terraform init
# terraform apply -auto-approve
# while [ $(terraform plan -detailed-exitcode | grep -o "exit code [0-9]*" | grep -o "[0-9]*") -eq 2 ]; do
#   echo "Esperando a que Terraform termine de aplicar los de web y worker..."
#   sleep 5





