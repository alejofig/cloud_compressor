#!/bin/bash
DATABASE_URL: postgresql://example:example@11.11.111.11:5432/example
export CELERY_RESULT_BACKEND=redis://34.172.40.15:6379/0
export PUERTO_SMTP=587
CELERY_BROKER_URL: redis://:6379/0
export CORREO_ELECTRONICO="clouduniandesmiso@hotmail.com"
export SERVIDOR_SMTP="smtp-mail.outlook.com"
export USUARIO_SMTP="clouduniandesmiso@hotmail.com"
export PASSWORD_SMTP="12uniandes12"
export JWT_ALGORITHM="HS256"
export JWT_SECRET_KEY="frase-secreta"

export FLASK_APP=/app/app.py
echo $FLASK_APP
cd /app/
# Cambia al directorio del proyecto

/usr/local/bin/python -m flask procesar

