

## Introducción
La aplicación web Cloud Conversion Tool es una plataforma en línea que permite a los usuarios cargar archivos multimedia y cambiar su formato o realizar procesos de compresión. La aplicación está diseñada para ofrecerse de forma gratuita a los usuarios de internet y se basa en un modelo de creación de cuentas y acce<so al administrador de archivos.

## Arquitectura de la Aplicación
La arquitectura de la aplicación se divide en componentes, que se combinan para proporcionar una solución escalable y fácil de administrar.

## Componentes de la Aplicación
* Base de Datos: La aplicación utiliza una base de datos PostgreSQL para almacenar información de usuarios y archivos cargados. La base de datos se ejecuta como un contenedor Docker y se configura con variables de entorno para establecer la contraseña, el usuario y el nombre de la base de datos.

* Servidor Web: El servidor web es responsable de gestionar las solicitudes HTTP entrantes y proporcionar una respuesta adecuada. El servidor web está diseñado en Flask y se ejecuta en un contenedor Docker separado. El contenedor se configura para utilizar el servidor NGINX para enrutar solicitudes y se vincula al puerto 8000.

* Servidor de Tareas: El servidor de tareas es responsable de procesar solicitudes de conversión y compresión de archivos en segundo plano. La aplicación utiliza Celery para gestionar las tareas en cola y se ejecuta en un contenedor Docker separado. El contenedor está configurado para conectarse a la base de datos PostgreSQL y al servidor Redis.

* Redis: La aplicación utiliza Redis como backend para Celery, lo que permite una gestión más eficiente de tareas en segundo plano. El servidor Redis se ejecuta en un contenedor Docker separado y se configura para utilizar el puerto 6379.

## Docker Compose
Para ejecutar la aplicación, se utiliza el archivo docker-compose.yml. Este archivo define los servicios de Docker necesarios para la aplicación, incluyendo la base de datos, la interfaz de usuario, el servidor web, el servidor de tareas y el servidor Redis. Además, el archivo docker-compose.yml configura las variables de entorno necesarias para cada contenedor Docker, incluyendo la URL de la base de datos, la URL del servidor Redis y las credenciales SMTP necesarias para enviar correos electrónicos de notificación a los usuarios.

Para ejecutar el compose en local:

 * docker-compose up --build       
 * docker-compose down
 * docker-compose up -d

Para ejecutar la app en una instancia de aws:
Se deben tener las credenciales de aws configuradas. Se debe tener el main.tf y ejecutar:

 * terraform init
 * terraform apply

 Para ejecutar el proyecto en gcloud se debe:
 1. Crear un archivo de credenciales en la cuenta de gcp con permisos suficientes.
 2. Levantar la base de datos con terraform. En la carpeta database se le da apply y bota una ip.
 3. Levantar el servidor de redis. En la carpeta de redis se le da apply y bota una ip.
 4. Levantar el servidor de los archivos compartidos (pendiente). en la carpeta nfs se le da apply y bota una ip.
 5. Modificar las variables de entorno (db,redis y nfs) en los siguientes archivos:
    5.1. docker-compose.yml (levanta el server web)
    5.2 docker-compose-worker.yml (levanta el worker)
    5.3 process_files.sh (es el que tiene el contexto de las variables para ejecutar las tareas de manera async)

En el archivo terraform.tfstate.backup queda la public_ip y se puede acceder mediante : http://public_ip:8000/api/auth/login

## Conclusiones
En conclusión, la arquitectura de la aplicación web Cloud Conversion Tool está diseñada para proporcionar una solución escalable y fácil de administrar para la conversión y compresión de archivos multimedia. La aplicación utiliza contenedores Docker para gestionar cada componente de la aplicación y se integra con Redis y Celery para ofrecer una gestión de tareas en segundo plano más eficiente. 
