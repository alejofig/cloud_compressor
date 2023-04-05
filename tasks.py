from datetime import datetime
import os
import subprocess
import smtplib
from email.mime.text import MIMEText
from modelos.modelos import Archivo,EstadoConversion, EstadoSolicitud, Solicitud, TipoCompresion,db
import boto3
from celery import Celery
from app import app

celery = Celery(__name__)
celery.conf.broker_url = os.environ.get("CELERY_BROKER_URL", "redis://localhost:6379")
celery.conf.result_backend = os.environ.get("CELERY_RESULT_BACKEND", "redis://localhost:6379")

@celery.task()
def procesar_solicitud(id_solicitud):
    with app.app_context():
        solicitud = Solicitud.query.filter_by(id=id_solicitud).first()
        archivo = solicitud.archivo
        solicitud.estado = EstadoSolicitud.completada
        db.session.commit()
        return "Listo"

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
    
    if archivo.formato_origen == TipoCompresion.zip.value:
        comando = f'unzip {nombre_archivo}'
    elif archivo.formato_origen == TipoCompresion.seven_z.value:
        comando = f'7z x {nombre_archivo}'
    elif archivo.formato_origen == TipoCompresion.tar_gz.value:
        comando = f'tar -xzf {nombre_archivo}'
    elif archivo.formato_origen == TipoCompresion.tar_bz_dos.value:
        comando = f'tar -xjf {nombre_archivo}'
    else:
        raise ValueError('El formato de archivo de origen no es válido')
        
    subprocess.call(comando, shell=True)
    
    if archivo.formato_destino == TipoCompresion.zip.value:
        comando = f'zip {archivo_salida} *'
    elif archivo.formato_destino == TipoCompresion.seven_z.value:
        comando = f'7z a {archivo_salida} *'
    elif archivo.formato_destino == TipoCompresion.tar_gz.value:
        comando = f'tar -czf {archivo_salida} *'
    elif archivo.formato_destino == TipoCompresion.tar_bz_dos.value:
        comando = f'tar -cjf {archivo_salida} *'
    else:
        raise ValueError('El formato de archivo de destino no es válido')
    
    subprocess.call(comando, shell=True)
    
    # Subir el archivo convertido a S3
    stream = open(archivo_salida, 'rb')
    s3.upload_fileobj(
        stream,
        current_app.config['AWS_S3_BUCKET'],
        f'{archivo.id}_{archivo.nombre}.{archivo.formato_destino}'
    )
    
    # Actualizar el estado del archivo y la solicitud
    archivo.estado = EstadoConversion.processed
    solicitud.estado = EstadoSolicitud.completada
    db.session.commit()
    
    # Enviar un correo electrónico al usuario
    enviar_correo_electronico(archivo.usuario.correo_electronico, archivo.url_modificado)



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
