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

chmod u+rw docker-compose.yml
chmod u+rw docker-compose-worker.yml
chmod u+rw process_files.sh

sed -E "s#DATABASE_URL: postgresql://example:example@.*:5432/example#DATABASE_URL: postgresql://example:example@${database_id}:5432/example#" docker-compose.yml > docker-compose-temp.yml && mv docker-compose-temp.yml docker-compose.yml
sed -E "s#CELERY_RESULT_BACKEND: redis://.*:6379/0#CELERY_RESULT_BACKEND: redis://${redis_ip}:6379/0#" docker-compose.yml > docker-compose-temp.yml && mv docker-compose-temp.yml docker-compose.yml
sed -E "s#CELERY_BROKER_URL: redis://.*:6379/0#CELERY_BROKER_URL: redis://${redis_ip}:6379/0#" docker-compose.yml > docker-compose-temp.yml && mv docker-compose-temp.yml docker-compose.yml


sed -E "s#DATABASE_URL: postgresql://example:example@.*:5432/example#DATABASE_URL: postgresql://example:example@${database_id}:5432/example#" docker-compose-worker.yml > docker-compose-worker-temp.yml && mv docker-compose-worker-temp.yml docker-compose-worker.yml
sed -E "s#CELERY_RESULT_BACKEND: redis://.*:6379/0#CELERY_RESULT_BACKEND: redis://${redis_ip}:6379/0#" docker-compose-worker.yml > docker-compose-worker-temp.yml && mv docker-compose-worker-temp.yml docker-compose-worker.yml
sed -E "s#CELERY_BROKER_URL: redis://.*:6379/0#CELERY_BROKER_URL: redis://${redis_ip}:6379/0#" docker-compose-worker.yml > docker-compose-worker-temp.yml && mv docker-compose-worker-temp.yml docker-compose-worker.yml

sed -E "s#export DATABASE_URL=postgresql://example:example@.*:5432/example#export DATABASE_URL=postgresql://example:example@${database_id}:5432/example#" process_files.sh > process_files-temp.sh && mv  process_files-temp.sh process_files.sh
sed -E "s#export CELERY_RESULT_BACKEND=redis://.*:6379/0#export CELERY_RESULT_BACKEND=redis://${redis_ip}:6379/0#" process_files.sh > process_files-temp.sh && mv  process_files-temp.sh process_files.sh
sed -E "s#export CELERY_BROKER_URL=redis://.*:6379/0#export CELERY_BROKER_URL=redis://${redis_ip}:6379/0#" process_files.sh > process_files-temp.sh && mv  process_files-temp.sh process_files.sh



git add .
git commit -m "Actualización de variables de entorno con Terraform"
git push


terraform init
terraform apply -auto-approve
while [ $(terraform plan -detailed-exitcode | grep -o "exit code [0-9]*" | grep -o "[0-9]*") -eq 2 ]; do
   echo "Esperando a que Terraform termine de aplicar los de web y worker..."
   sleep 5

gcloud compute scp credenciales_gcp.json [web]:/cloud_compressor/





