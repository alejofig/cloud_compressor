#!/bin/bash
export DATABASE_URL=postgresql://postgres:example@34.71.237.78:5432/example
export CELERY_RESULT_BACKEND=edis://35.226.66.8:6379/0
export PUERTO_SMTP=587
export CELERY_BROKER_URL=edis://35.226.66.8:6379/0
export CORREO_ELECTRONICO="clouduniandesmiso@hotmail.com"
export SERVIDOR_SMTP="smtp-mail.outlook.com"
export USUARIO_SMTP="clouduniandesmiso@hotmail.com"
export PASSWORD_SMTP="12uniandes12"
export JWT_ALGORITHM="HS256"
export JWT_SECRET_KEY="frase-secreta"
export NFS_IP= 10.10.10.10/

export FLASK_APP=/app/app.py
echo $FLASK_APP
cd /app/
# Cambia al directorio del proyecto

/usr/local/bin/python -m flask procesar

