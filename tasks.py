from datetime import datetime
import os
import shutil
import subprocess
import smtplib
from email.mime.text import MIMEText
from modelos.modelos import Archivo,EstadoConversion, EstadoConversionArchivo, EstadoSolicitud, Solicitud, TipoCompresion,db
import boto3
from celery import Celery
from app import app
from celery.signals import task_postrun

celery = Celery(__name__)
celery.conf.broker_url = os.environ.get("CELERY_BROKER_URL", "redis://localhost:6379")
celery.conf.result_backend = os.environ.get("CELERY_RESULT_BACKEND", "redis://localhost:6379")

@celery.task()
def procesar_solicitud(id_solicitud):
    print(f"Procesando la solicitud {id_solicitud}")
    solicitud = Solicitud.query.filter_by(id=id_solicitud).first()
    solicitud.estado = EstadoSolicitud.en_progreso
    archivo = solicitud.archivo
    registro_conversion = solicitud.registro_conversion

    # Comprobar si el archivo ya ha sido procesado
    if archivo.estado == EstadoConversion.processed:
        return

    date_str = datetime.now().strftime("%Y-%m-%d")

    path = os.path.join(os.getcwd(), 'conversions', date_str)
    os.makedirs(path, exist_ok=True)
    # Guardar el archivo en la carpeta correspondiente
    nombre_archivo =  archivo.url_original
    archivo.url_modificado = os.path.join(path,f'{archivo.id}_{datetime.now().strftime("%Y%m%d_%H%M%S")}.{archivo.formato_destino}')
    if archivo.formato_origen == TipoCompresion.zip.value:
        comando = f'unzip {nombre_archivo}'
    elif archivo.formato_origen == TipoCompresion.seven_z.value:
        comando = f'7z x {nombre_archivo}'
    elif archivo.formato_origen == TipoCompresion.tar_gz.value:
        comando = f'tar -xzf {nombre_archivo}'
    elif archivo.formato_origen == TipoCompresion.tar_bz_dos.value:
        comando = f'tar -xjf {nombre_archivo}'
    else:
        registro_conversion.estado = EstadoConversionArchivo.fallida
        archivo.estado = EstadoConversion.processed
        solicitud.estado = EstadoSolicitud.completada
        db.session.commit()
        raise ValueError('El formato de archivo de origen no es válido')
            
    if archivo.formato_destino == TipoCompresion.zip.value:
        comando = f'zip {archivo.url_modificado} *'
    elif archivo.formato_destino == TipoCompresion.seven_z.value:
        comando = f'7z a {archivo.url_modificado} *'
    elif archivo.formato_destino == TipoCompresion.tar_gz.value:
        comando = f'tar -czf {archivo.url_modificado} *'
    elif archivo.formato_destino == TipoCompresion.tar_bz_dos.value:
        comando = f'tar -cjf {archivo.url_modificado} *'
    else:
        registro_conversion.estado = EstadoConversionArchivo.fallida
        archivo.estado = EstadoConversion.processed
        solicitud.estado = EstadoSolicitud.completada
        db.session.commit()
        raise ValueError('El formato de archivo de destino no es válido')

    subprocess.call(comando, shell=True)
    # Actualizar el estado del archivo y la solicitud
    archivo.estado = EstadoConversion.processed
    registro_conversion.estado = EstadoConversionArchivo.exitosa
    solicitud.estado = EstadoSolicitud.completada
    # Enviar un correo electrónico al usuario
    enviar_correo_electronico(solicitud)
    db.session.commit()

@task_postrun.connect()
def close_session(*args,**kwargs):
    db.session.remove()
    return


def enviar_correo_electronico(solicitud):
    archivo = solicitud.archivo
    destinatario = archivo.usuario.correo_electronico
    print(f"Enviando Correo para solicitud {solicitud.id}")
    cuerpo = f'Su solicitud con id {solicitud.id} ha sido procesada con estado {solicitud.estado.value}. Para más información consulte la dirección /api/tasks/{solicitud.id}. El archivo con nombre {solicitud.archivo.nombre} ahora tiene el formato {solicitud.archivo.formato_destino}.'
    mensaje = MIMEText(cuerpo)
    mensaje['Subject'] = 'Archivo convertido'
    mensaje['From'] = os.environ.get('CORREO_ELECTRONICO')
    mensaje['To'] = destinatario

    servidor_smtp = smtplib.SMTP(os.environ.get('SERVIDOR_SMTP'), 587)
    servidor_smtp.connect(os.environ.get('SERVIDOR_SMTP'), 587)
    servidor_smtp.starttls()
    servidor_smtp.login(os.environ.get('USUARIO_SMTP'), os.environ.get('PASSWORD_SMTP'))
    servidor_smtp.sendmail(os.environ.get('CORREO_ELECTRONICO'), destinatario, mensaje.as_string())
    servidor_smtp.quit()

