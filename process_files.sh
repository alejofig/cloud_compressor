#!/bin/bash
export DATABASE_URL=postgresql://postgres:example@db:5432/example
export JWT_ALGORITHM="HS256"
export JWT_SECRET_KEY="frase-secreta"
export GOOGLE_APPLICATION_CREDENTIALS="/app/config/creds.json"
export GCLOUD_PROJECT="746411315164"

export FLASK_APP=/app/app.py
echo $FLASK_APP
cd /app/
# Cambia al directorio del proyecto

/usr/local/bin/python -m flask procesar

