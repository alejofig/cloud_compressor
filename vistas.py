import hashlib
from flask_restful import Resource
from modelos.modelos import db, Usuario
from datetime import datetime
import json
from flask import request, send_file
from flask_jwt_extended import get_jwt_identity, jwt_required, create_access_token, get_jwt_identity
import os
from logica.tareas import delete_task, get_tasks,create_task, get_task
from logica.archivos import enviar_archivo

def is_valid(api_key):
    if api_key == os.getenv("API_KEY"):
        return True

class VistaTasks(Resource):

    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        tasks = get_tasks(request,user_id)
        return tasks
    
    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        new_task = create_task(request,user_id)
        return new_task
class VistaTask(Resource):
    @jwt_required()
    def get(self, id_task):
        user_id = get_jwt_identity()
        task = get_task(id_task, user_id )
        return task

    @jwt_required()
    def delete(self,id_task):
        user_id = get_jwt_identity()
        task = delete_task(id_task,user_id)
        return task

class VistaFiles(Resource):

    @jwt_required()
    def get(self,filename):
        user_id = get_jwt_identity()
        file_path = enviar_archivo(request,user_id,filename)
        return send_file(file_path)


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
                usuario=request.json["username"],
                contrasena=contrasena_encriptada,
                correo_electronico =request.json["email"])
            db.session.add(nuevo_usuario)
            db.session.commit()
            # token_de_acceso = create_access_token(identity=nuevo_usuario.id)
            return {"mensaje": "usuario creado exitosamente", "id": nuevo_usuario.id}
        else:
            return "El usuario ya existe", 404


