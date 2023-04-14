from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from sqlalchemy import DateTime, ForeignKey
from sqlalchemy.orm import relationship
import enum

db = SQLAlchemy()

class TipoCompresion(enum.Enum):
    zip = 'zip'
    seven_z = '7z'
    tar_gz = 'tar.gz'
    tar_bz_dos = "tar.bz2"

class EstadoConversion(enum.Enum):
    uploaded = 'uploaded'
    processed = 'processed'

class EstadoSolicitud(enum.Enum):
    pendiente = 'pendiente'
    en_progreso = 'en progreso'
    completada = 'completada'

class EstadoConversionArchivo(enum.Enum):
    pendiente = 'pendiente'
    exitosa = 'exitosa'
    fallida = 'fallida'

class EstadoConversionArchivo(enum.Enum):
    pendiente = 'pendiente'
    exitosa = 'exitosa'
    fallida = 'fallida'

class EstadoEvento(enum.Enum):
    RECIBIDO = 1
    ERROR_AL_PROCESAR = 2
    ENVIADO = 3
    COMPLETADO = 4

class Usuario(db.Model):  

    __tablename__ = "usuarios"
    id = db.Column(db.Integer, primary_key=True)
    usuario = db.Column(db.String(50))
    contrasena = db.Column(db.String(50))
    correo_electronico = db.Column(db.String(50))
    archivos = relationship('Archivo', backref='usuario',cascade="all,delete")


class Archivo(db.Model):
    __tablename__ = 'archivos'

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(255), nullable=False)
    size = db.Column(db.Integer, nullable=False)
    formato_origen = db.Column(db.String(255), nullable=False)
    formato_destino = db.Column(db.String(255), nullable=False)
    fecha_subida = db.Column(DateTime, nullable=False, default=datetime.utcnow)
    estado = db.Column(db.Enum(EstadoConversion), nullable=False)
    url_original = db.Column(db.String(255), nullable=True)
    url_modificado = db.Column(db.String(255), nullable=True)
    id_usuario = db.Column(db.Integer, ForeignKey('usuarios.id'), nullable=False)

    solicitudes = relationship('Solicitud', backref='archivo',cascade="all,delete")

class Solicitud(db.Model):
    __tablename__ = 'solicitudes'

    id = db.Column(db.Integer, primary_key=True)
    fecha_creacion = db.Column(DateTime, nullable=False, default=datetime.utcnow)
    estado = db.Column(db.Enum(EstadoSolicitud), nullable=False)
    fecha_inicio = db.Column(DateTime, nullable =True)
    fecha_finalizacion = db.Column(DateTime, nullable =True)
    id_archivo = db.Column(db.Integer, ForeignKey('archivos.id'), nullable=False)
    id_usuario = db.Column(db.Integer, ForeignKey('usuarios.id'), nullable=False)

    registro_conversion = relationship('RegistroConversion', uselist=False, backref='solicitud',cascade="all,delete")


class RegistroConversion(db.Model):
    __tablename__ = 'registros_conversion'

    id = db.Column(db.Integer, primary_key=True)
    fecha_creacion = db.Column(DateTime, nullable=False, default=datetime.utcnow)
    estado = db.Column(db.Enum(EstadoConversionArchivo), nullable=False)

    id_archivo = db.Column(db.Integer, ForeignKey('archivos.id'), nullable=False)
    id_usuario = db.Column(db.Integer, ForeignKey('usuarios.id'), nullable=False)
    id_solicitud = db.Column(db.Integer, ForeignKey('solicitudes.id'), nullable=False)
