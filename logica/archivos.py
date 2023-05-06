from flask import send_file
from modelos.modelos import Archivo
from google.cloud import storage
import os

def enviar_archivo(request,user_id,filename):
    # crear el cliente de gcp
    client = storage.Client()
    bucket = client.get_bucket('bucket-cloud-compressor-alejo')

    ext=filename.split(".")[1]
    name = filename.split(".")[0]
    archivo = Archivo.query.filter_by(id_usuario=user_id).filter(Archivo.nombre.like(f'%{name}%')).first()
   

    if archivo.nombre.split(".")[0] == name and archivo.nombre.split(".")[1] == ext:
        # Descargar archivos de bucket
        blob = bucket.blob(archivo.url_original)
        os.makedirs(os.path.dirname(archivo.url_original), exist_ok=True)
        blob.download_to_filename(archivo.url_original)
        file_path = archivo.url_original
    else:
        # Descargar archivos de bucket
        blob = bucket.blob(archivo.url_modificado)
        os.makedirs(os.path.dirname(archivo.url_modificado), exist_ok=True)
        blob.download_to_filename(archivo.url_modificado)
        file_path = archivo.url_modificado
    return file_path
