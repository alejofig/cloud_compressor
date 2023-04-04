import hashlib
from flask_restful import Resource
from modelos.modelos import db, Usuario
from datetime import datetime
import json
from flask import request
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
import os
from logica.tareas import get_tasks,create_task, get_task

def is_valid(api_key):
    if api_key == os.getenv("API_KEY"):
        return True

class VistaTasks(Resource):

    @jwt_required
    def get(self):
        user_id = get_jwt_identity()
        tasks = get_tasks(request,user_id)
        return tasks
    
    @jwt_required
    def post(self):
        user_id = get_jwt_identity()
        new_task = create_task(request,user_id)
        return new_task
class VistaTask(Resource):

    @jwt_required
    class VistaTask(Resource):
        def get(self, task_id):
            user_id = get_jwt_identity()
            task = get_task(task_id, user_id )
            return task

    @jwt_required
    def delete(self):
        user_id = get_jwt_identity()
        return "Permite eliminar una tarea en la aplicación. El usuario requiere autorización."

class VistaFiles(Resource):
    @jwt_required
    def get(self,filename):

        return "Permite recuperar el archivo original o procesado"

class VistaLogIn(Resource):

    def post(self):
        contrasena_encriptada = hashlib.md5(
            request.json["password"].encode('utf-8')).hexdigest()
        usuario = Usuario.query.filter(Usuario.usuario == request.json["username"],
                                        Usuario.contrasena == contrasena_encriptada).first()
        db.session.commit()
        if usuario is None:
            return "El usuario no existe", 404
        else:
            token_de_acceso = create_access_token(identity=usuario.id)
            return {"mensaje": "Inicio de sesión exitoso", "token": token_de_acceso, "id": usuario.id}


class VistaSignIn(Resource):

    def post(self):
        usuario = Usuario.query.filter(
            Usuario.usuario == request.json["username"]).first()
        contrasena_uno = request.json["password1"]
        contrasena_dos = request.json["password2"]
        if contrasena_dos != contrasena_uno:
            return "Las contraseñas no coinciden", 404
        if usuario is None:
            contrasena_encriptada = hashlib.md5(
                request.json["password1"].encode('utf-8')).hexdigest()
            nuevo_usuario = Usuario(
                usuario=request.json["usuario"], contrasena=contrasena_encriptada)
            db.session.add(nuevo_usuario)
            db.session.commit()
            # token_de_acceso = create_access_token(identity=nuevo_usuario.id)
            return {"mensaje": "usuario creado exitosamente", "id": nuevo_usuario.id}
        else:
            return "El usuario ya existe", 404


