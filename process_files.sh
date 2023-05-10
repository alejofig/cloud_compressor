#!/bin/bash
export DATABASE_URL=postgresql://postgres:example@34.170.129.9:5432/example
export JWT_ALGORITHM="HS256"
export JWT_SECRET_KEY="frase-secreta"

export FLASK_APP=/app/app.py
echo $FLASK_APP
cd /app/
# Cambia al directorio del proyecto

/usr/local/bin/python -m flask procesar

