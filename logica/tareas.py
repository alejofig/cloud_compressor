
import os
from flask import jsonify, make_response

from modelos.modelos import EstadoSolicitud,Archivo, EstadoConversion, RegistroConversion,Solicitud, EstadoConversionArchivo,db
from datetime import datetime
import uuid
from google.cloud import storage
from google.auth import compute_engine

def create_task(request,user_id):
    # crear el cliente de gcp
    credentials = compute_engine.Credentials()
    client = storage.Client(credentials=credentials, project="746411315164")

    # Por implementar el envío de los archivos
    file_name = request.form.get('fileName',None)
    new_format = request.form.get('newFormat',None)

    file_exists = Archivo.query.filter_by(id_usuario=user_id,
                            nombre = file_name,
                            formato_origen=file_name.split(".")[1],
                            formato_destino=new_format).first()
    # Aquí se guarda el archivo cargado en la base de datos
    if file_exists is None:
        file_size = 10 #TODO
        file_format = file_name.split('.')[-1]
        file = request.files['file']
        uuid_file = uuid.uuid4()
        date_str = datetime.now().strftime("%Y-%m-%d")

        path = os.path.join(os.getcwd(), 'uploads', date_str)
        os.makedirs(path, exist_ok=True)
        # Guardar el archivo en la carpeta correspondiente
        final_path = os.path.join(path, f'{uuid_file}.{file_format}')
        file.save(final_path)
        # Guardar el archivo dentro del bucket de cloudStorage
        bucket = client.get_bucket('bucket-cloud-compressor-alejo')
        blob = bucket.blob(final_path)
        blob.upload_from_filename(final_path)


        fecha_subida = datetime.now()
        estado = EstadoConversion.uploaded

        archivo = Archivo(nombre=file_name,
                            size=file_size,
                            formato_origen=file_format,
                            formato_destino=new_format,
                            fecha_subida=fecha_subida,
                            estado=estado,
                            url_original = final_path,
                            url_modificado = "",
                            id_usuario=user_id)

        db.session.add(archivo)
        db.session.commit()

        # Aquí se crea una nueva solicitud de conversión para el archivo cargado
        solicitud = Solicitud(fecha_creacion=datetime.now(),
                                            estado=EstadoSolicitud.pendiente,
                                            id_archivo=archivo.id,
                                            id_usuario=user_id)
        db.session.add(solicitud)
        db.session.commit()

        # Aquí se crea una nueva conversión para la solicitud creada
        conversion = RegistroConversion(fecha_creacion=datetime.now(),
                                    estado=EstadoConversionArchivo.pendiente,
                                    id_archivo=archivo.id,
                                    id_usuario=user_id,
                                    id_solicitud=solicitud.id)
        db.session.add(conversion)
        db.session.commit()

        # Aquí se retorna la información de la nueva tarea creada
        task_dict = {'id': solicitud.id,
                        'fecha_creacion': solicitud.fecha_creacion.strftime('%Y-%m-%d %H:%M:%S'),
                        'estado': solicitud.estado.value}
        return make_response(jsonify(task_dict), 201)
    else:
        return make_response(jsonify({'error': 'No se especificó un archivo o un formato de destino o ya existe el archivo.'}), 400)

def get_tasks(request,user_id):

    solicitudes = Solicitud.query.filter_by(id_usuario=user_id).all()
    registros_conversion = RegistroConversion.query.join(Solicitud).filter_by(id_usuario=user_id).all()  
    tareas = []
    if solicitudes:
        for solicitud in solicitudes:
            # Buscar el registro de conversión correspondiente a la solicitud actual
            registro_conversion = next((r for r in registros_conversion if r.id_solicitud == solicitud.id), None)

            tarea = {
                'id': solicitud.id,
                'nombre_archivo': solicitud.archivo.nombre,
                'formato_origen': solicitud.archivo.formato_origen,
                'formato_destino': solicitud.archivo.formato_destino,
                'estado': solicitud.estado.value,
                'fecha_creacion': solicitud.fecha_creacion.isoformat(),
                'fecha_inicio': solicitud.fecha_inicio.isoformat() if solicitud.fecha_inicio else "",
                'fecha_finalizacion': solicitud.fecha_finalizacion.isoformat() if solicitud.fecha_finalizacion else "",
                'registro_conversion': {
                    'id': registro_conversion.id,
                    'estado': registro_conversion.estado.value,
                    'fecha_creacion': registro_conversion.fecha_creacion.isoformat()
                } if registro_conversion is not None else None
            }

            tareas.append(tarea)

            # Aplicar el filtro de cantidad de resultados
            max_results = request.args.get('max')
            if max_results is not None:
                tareas = tareas[:int(max_results)]

            # Aplicar el ordenamiento según el ID de la tarea
            order = request.args.get('order')
            if order is not None and int(order) == 1:
                tareas = sorted(tareas, key=lambda x: x['id'], reverse=True)
            # Devolver el resultado en formato JSON
        return make_response(jsonify(tareas) if tareas else [], 200)
    else:
        return []
    return make_response(jsonify({'mensaje': 'No autorizado'}), 401)


def get_task(task_id,user_id):
    solicitud = Solicitud.query.filter_by(id_usuario=user_id,id=task_id).first()
    if solicitud:
        return make_response(jsonify({
            'id': solicitud.id,
            'fecha_creacion': solicitud.fecha_creacion.strftime("%Y-%m-%d %H:%M:%S"),
            'estado': solicitud.estado.value
        }), 200)
    else:
        return make_response(jsonify({'message': 'Solicitud no encontrada'}), 404)
    
def delete_task(task_id,user_id):
    task = Solicitud.query.filter_by(id_usuario=user_id,id=task_id).first()
    if task:
        db.session.delete(task)
        db.session.commit()
        return make_response(jsonify({}), 204)
    else:   
        return make_response(jsonify({'message': 'Task not found'}), 404)