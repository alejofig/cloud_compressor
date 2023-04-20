#!/bin/bash
cd database
# Ejecutar los comandos de Terraform
terraform destroy -auto-approve

# Esperar hasta que Terraform termine de aplicar los cambios
while [ $(terraform plan -detailed-exitcode | grep -o "exit code [0-9]*" | grep -o "[0-9]*") -eq 2 ]; do
  echo "Esperando a que Terraform termine de aplicar los cambios de la base de datos ..."
  sleep 5
done


cd ..
cd redis

terraform destroy -auto-approve

# Esperar hasta que Terraform termine de aplicar los cambios
while [ $(terraform plan -detailed-exitcode | grep -o "exit code [0-9]*" | grep -o "[0-9]*") -eq 2 ]; do
  echo "Esperando a que Terraform termine de aplicar los cambios de redis ..."
  sleep 5
done
cd ..

terraform destroy -auto-approve

while [ $(terraform plan -detailed-exitcode | grep -o "exit code [0-9]*" | grep -o "[0-9]*") -eq 2 ]; do
  echo "Esperando a que Terraform termine de aplicar los de web y worker..."
  sleep 5


