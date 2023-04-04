
from flask import jsonify

from modelos.modelos import Archivo, EstadoConversion, RegistroConversion,Solicitud, EstadoConversionArchivo,db
from datetime import datetime

def create_task(request,user_id):
    file_name = request.files.get('fileName', None)
    new_format = request.form.get('newFormat', None)

    # Aquí se guarda el archivo cargado en la base de datos
    if file_name is not None and new_format is not None:
        file_size = len(file_name.read())
        file_name.seek(0)
        file_format = file_name.split('.')[-1]
        fecha_subida = datetime.now()
        estado = EstadoConversion.uploaded

        archivo = Archivo(nombre=file_name,
                            size=file_size,
                            formato_origen=file_format,
                            formato_destino=new_format,
                            fecha_subida=fecha_subida,
                            estado=estado,
                            id_usuario=user_id)
        db.session.add(archivo)
        db.session.commit()

        # Aquí se crea una nueva solicitud de conversión para el archivo cargado
        solicitud = Solicitud(fecha_creacion=datetime.now(),
                                            estado=EstadoConversion.uploaded,
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
        return jsonify(task_dict), 201
    else:
        return jsonify({'error': 'No se especificó un archivo o un formato de destino'}), 400

def get_tasks(request,user_id):
    solicitudes = Solicitud.query.filter_by(id_usuario=user_id).all()
    registros_conversion = RegistroConversion.query.join(Solicitud).filter_by(id_usuario=user_id).all()

    tareas = []
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
        return jsonify(tareas), 200
    return jsonify({'mensaje': 'No autorizado'}), 401


def get_task(task_id,user_id):
    solicitud = Solicitud.query.filter_by(id_usuario=user_id,id=task_id).first()
    if solicitud:
        return jsonify({
            'id': solicitud.id,
            'fecha_creacion': solicitud.fecha_creacion.strftime("%Y-%m-%d %H:%M:%S"),
            'estado': solicitud.estado.value
        }), 200
    else:
        return jsonify({'message': 'Archivo no encontrado'}), 404
    
def delete_task(task_id,user_id):
    task = Solicitud.query.filter_by(id_usuario=user_id,id=task_id).first()
    if task:
        db.session.delete(task)
        db.session.commit()
        return jsonify({}), 204
    else:
        return jsonify({'message': 'Task not found'}), 404