from flask import send_file
from modelos.modelos import Archivo
from google.cloud import storage

def enviar_archivo(request,user_id,filename):
    # crear el cliente de gcp
    client = storage.Client.from_service_account_json("keys_gcp.json")
    bucket = client.get_bucket('bucket-cloud-compressor')

    ext=filename.split(".")[1]
    name = filename.split(".")[0]
    archivo = Archivo.query.filter_by(id_usuario=user_id).filter(Archivo.nombre.like(f'%{name}%')).first()
   

    if archivo.nombre.split(".")[0] == name and archivo.nombre.split(".")[1] == ext:
        # Descargar archivos de bucket
        blob = bucket.blob(archivo.url_original)
        blob.download_to_filename(archivo.url_original)
        file_path = archivo.url_original
    else:
        # Descargar archivos de bucket
        blob = bucket.blob(archivo.url_modificado)
        blob.download_to_filename(archivo.url_modificado)
        file_path = archivo.url_modificado
    return file_path
