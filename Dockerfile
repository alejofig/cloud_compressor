# Usamos la imagen oficial de Python como base
FROM python:3.8-slim-buster

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos el archivo de requisitos al contenedor
COPY requirements.txt .

# Instalamos las dependencias
RUN pip3 install --no-cache-dir -r requirements.txt

# Copiamos el código fuente al contenedor
COPY . .

# Agregamos el archivo process_files.sh al contenedor
COPY process_files.sh /app

RUN chmod +x /app/process_files.sh
# Instalamos el paquete cron
RUN apt-get update && apt-get -y install cron p7zip-full

RUN export FLASK_APP=app.py

RUN crontab -l | { cat; echo "*/1 * * * * /usr/bin/flock -n /tmp/process_files.lockfile.$RANDOM /bin/bash /app/process_files.sh >> /var/log/cron.log 2>&1"; } | crontab -

# Exponemos el puerto que utilizará Flask
EXPOSE 5000

# Definimos el comando para ejecutar la aplicación y el cron daemon
CMD ["sh", "-c", "cron && python app.py"]
