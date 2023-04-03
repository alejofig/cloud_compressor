from celery import Celery
from datetime import datetime
from flask import current_app
import os
import subprocess
import smtplib
from email.mime.text import MIMEText
from modelos.modelos import Archivo,EstadoConversion,db
import boto3


celery = Celery(__name__)

@celery.task
def procesar_archivo(id_archivo):
    with current_app.app_context(): 
        # Obtener el archivo de la base de datos
        archivo = Archivo.query.get(id_archivo)
        
        # Comprobar si el archivo ya ha sido procesado
        if archivo.estado == EstadoConversion.processed:
            return
        
        # Comprobar si el archivo existe en S3
        s3 = boto3.client(
            's3',
            aws_access_key_id=current_app.config['AWS_ACCESS_KEY_ID'],
            aws_secret_access_key=current_app.config['AWS_SECRET_ACCESS_KEY'],
            region_name=current_app.config['AWS_REGION']
        )
        nombre_archivo = f'{archivo.id}_{archivo.nombre}'
        objeto = s3.get_object(
            Bucket=current_app.config['AWS_S3_BUCKET'],
            Key=nombre_archivo
        )
        
        # Convertir el archivo
        directorio_salida = current_app.config['DIRECTORIO_SALIDA']
        archivo_salida = f'{directorio_salida}/{archivo.id}_{datetime.now().strftime("%Y%m%d_%H%M%S")}.{archivo.formato_destino}'
        comando = f'ffmpeg -i -y {archivo_salida}'
        subprocess.call(comando, shell=True)
        
        # Subir el archivo convertido a S3
        stream = open(archivo_salida, 'rb')
        s3.upload_fileobj(
            stream,
            current_app.config['AWS_S3_BUCKET'],
            f'{archivo.id}_{archivo.nombre}.{archivo.formato_destino}'
        )
        
        # Actualizar el estado del archivo
        archivo.estado = EstadoConversion.processed
        db.session.commit()
        
        # Enviar un correo electrónico al usuario
        enviar_correo_electronico(archivo.usuario.correo_electronico, archivo.url)


def enviar_correo_electronico(destinatario, url):
    cuerpo = f'Su archivo ha sido convertido satisfactoriamente y está disponible en la siguiente dirección: {url}'
    mensaje = MIMEText(cuerpo)
    mensaje['Subject'] = 'Archivo convertido'
    mensaje['From'] = current_app.config['CORREO_ELECTRONICO']
    mensaje['To'] = destinatario
    
    servidor_smtp = smtplib.SMTP(current_app.config['SERVIDOR_SMTP'], current_app.config['PUERTO_SMTP'])
    servidor_smtp.starttls()
    servidor_smtp.login(current_app.config['USUARIO_SMTP'], current_app.config['PASSWORD_SMTP'])
    servidor_smtp.sendmail(current_app.config['CORREO_ELECTRONICO'], destinatario, mensaje.as_string())
    servidor_smtp.quit()
