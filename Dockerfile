# Usamos la imagen oficial de Python como base
FROM python:3.8-slim-buster

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos el archivo de requisitos al contenedor
COPY requirements.txt .

# Instalamos las dependencias
RUN pip3 install --no-cache-dir -r requirements.txt
RUN pip3 install gunicorn

# Copiamos el código fuente al contenedor
COPY . .

# Agregamos el archivo process_files.sh al contenedor
COPY process_files.sh /app

RUN chmod +x /app/process_files.sh
# Instalamos el paquete cron
RUN apt-get update && apt-get -y install cron p7zip-full zip unzip

RUN export FLASK_APP=app.py

RUN crontab -l | { cat; echo "*/1 * * * * /usr/bin/flock -n /tmp/process_files.lockfile.$RANDOM /bin/bash /app/process_files.sh >> /var/log/cron.log 2>&1"; } | crontab -
ENV DATABASE_URL=postgresql://postgres:example@35.226.170.82:5432/example
ENV CELERY_RESULT_BACKEND=redis://34.171.206.48:6379/0
ENV PUERTO_SMTP=587
ENV CELERY_BROKER_URL=redis://34.171.206.48:6379/0
ENV CORREO_ELECTRONICO="clouduniandesmiso@hotmail.com"
ENV SERVIDOR_SMTP="smtp-mail.outlook.com"
ENV USUARIO_SMTP="clouduniandesmiso@hotmail.com"
ENV PASSWORD_SMTP="12uniandes12"
ENV JWT_ALGORITHM="HS256"
ENV JWT_SECRET_KEY="frase-secreta"
# Definimos el comando para ejecutar la aplicación y el cron daemon
CMD ["sh", "-c", "service cron start && gunicorn app:app -b :$PORT --access-logfile -"]
