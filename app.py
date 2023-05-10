from email.mime.text import MIMEText
import smtplib
from flask_restful import Api
from vistas import VistaLogIn, VistaSignIn, VistaTasks, VistaTask,VistaFiles,HealthCheck
import serverless_wsgi
from modelos.modelos import EstadoSolicitud, Solicitud, db, Archivo,EstadoConversion
from flask_jwt_extended import JWTManager
from flask import Flask,current_app
from dotenv import load_dotenv
import os
import json
from datetime import datetime
from google.cloud import pubsub_v1

def create_app(config_name):
    application = Flask(__name__)
    application.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
    application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    return application



app = create_app('default')


app.config['DIRECTORIO_SALIDA'] = '/tmp'
app.config['CORREO_ELECTRONICO'] = os.environ.get('CORREO_ELECTRONICO')
app.config['SERVIDOR_SMTP'] = os.environ.get('SERVIDOR_SMTP')
app.config['PUERTO_SMTP'] = os.environ.get('PUERTO_SMTP')
app.config['USUARIO_SMTP'] = os.environ.get('USUARIO_SMTP')
app.config['PASSWORD_SMTP'] = os.environ.get('PASSWORD_SMTP')
app.config["JWT_ALGORITHM"] = "HS256"
app_context = app.app_context()
app_context.push()
app.config['JWT_SECRET_KEY'] = 'frase-secreta'


db.init_app(app)
db.create_all()
jwt = JWTManager(app)
api = Api(app)
api.add_resource(HealthCheck, '/')
api.add_resource(VistaSignIn, '/api/auth/signup')
api.add_resource(VistaLogIn, '/api/auth/login')
api.add_resource(VistaTasks, '/api/tasks')
api.add_resource(VistaTask, '/api/tasks/<int:id_task>')
api.add_resource(VistaFiles, '/api/files/<filename>')

@app.cli.command()
def procesar():
    publisher = pubsub_v1.PublisherClient()
    topic_path = publisher.topic_path("746411315164", "cloud-miso")
    """Run jobs"""
    solicitudes_pendientes = Solicitud.query.filter_by(estado=EstadoSolicitud.pendiente).all()
    for solicitud in solicitudes_pendientes:
        message = json.dumps({'id': solicitud.id}).encode('utf-8')
        solicitud.estado = EstadoSolicitud.queue
        response = publisher.publish(topic_path, data=message)
        message_id = response.result()
        solicitud.fecha_cola = datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S.%f')
        print(f"Published message with ID: {message_id}, solicitud {solicitud.id}")
        db.session.add(solicitud)
        db.session.commit()
        
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)

