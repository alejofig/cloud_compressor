from flask import send_file
from modelos.modelos import Archivo


def enviar_archivo(request,user_id,filename):
    ext=filename.split(".")[1]
    name = filename.split(".")[0]
    archivo = Archivo.query.filter_by(id_usuario=user_id).filter(Archivo.nombre.like(f'%{name}%')).first()
    if archivo.nombre.split(".")[0] == name and archivo.nombre.split(".")[1] == ext:
        file_path = archivo.url_original
    else:
        file_path = archivo.url_modificado
    return file_path
