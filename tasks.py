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
from celery.signals import worker_process_init
from google.cloud import storage
from google.auth import compute_engine


@worker_process_init.connect
def prep_db_pool(**kwargs):
    """
        When Celery fork's the parent process, the db engine & connection pool is included in that.
        But, the db connections should not be shared across processes, so we tell the engine
        to dispose of all existing connections, which will cause new ones to be opend in the child
        processes as needed.
        More info: https://docs.sqlalchemy.org/en/latest/core/pooling.html#using-connection-pools-with-multiprocessing
    """
    # The "with" here is for a flask app using Flask-SQLAlchemy.  If you don't 
    # have a flask app, just remove the "with" here and call .dispose()
    # on your SQLAlchemy db engine.
    with app.app_context():
        db.engine.dispose()

celery = Celery(__name__)
celery.conf.broker_url = os.environ.get("CELERY_BROKER_URL", "redis://localhost:6379")
celery.conf.result_backend = os.environ.get("CELERY_RESULT_BACKEND", "redis://localhost:6379")

@celery.task()
def procesar_solicitud(id_solicitud):
    # crear el cliente de gcp
    credentials = compute_engine.Credentials()
    client = storage.Client(credentials=credentials, project="746411315164")
    bucket = client.get_bucket('bucket-cloud-compressor-alejo')

    print(f"Procesando la solicitud {id_solicitud}")
    solicitud = Solicitud.query.filter_by(id=id_solicitud).first()
    solicitud.estado = EstadoSolicitud.en_progreso
    solicitud.fecha_inicio = datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S.%f')
    db.session.commit()
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

    # Guardar el archivo para que sea visible en task
    blob = bucket.blob(nombre_archivo)
    os.makedirs(os.path.dirname(nombre_archivo), exist_ok=True)
    blob.download_to_filename(nombre_archivo)

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
        solicitud.fecha_finalizacion = datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S.%f')
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
        solicitud.fecha_finalizacion = datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S.%f')
        db.session.commit()
        raise ValueError('El formato de archivo de destino no es válido')

    subprocess.call(comando, shell=True)
    # Guardar el archivo en el bucket
    blob = bucket.blob(archivo.url_modificado)
    blob.upload_from_filename(archivo.url_modificado)
    shutil.rmtree(path)
    # Actualizar el estado del archivo y la solicitud
    archivo.estado = EstadoConversion.processed
    registro_conversion.estado = EstadoConversionArchivo.exitosa
    solicitud.estado = EstadoSolicitud.completada
    # Enviar un correo electrónico al usuario
    #enviar_correo_electronico(solicitud)
    solicitud.fecha_finalizacion = datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S.%f')
    db.session.commit()

@task_postrun.connect()
def close_session(*args,**kwargs):
    db.session.remove()
    return

