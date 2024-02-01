Hola, soy Yorlin David Pazos Vides! a continuación te mostraré cómo configurar la app para su uso:

puedes hacer fork al repositorio, para tener una copia en tu Github, y luego clonarlo, o directamente clonar el repositorio en tu máquina local.
 
Una vez clonado el repositorio, te ubicas en la carpeta principal del mismo, y debes desplazarte a "api" o "client" según indique cada caso.

- Haz > npm i < en la carpeta "api" asi como también otro > npm i < en la carpeta "client". esto asegurará qué se instalen las dependencias necesarias


- para este proyecto usé NodeJs, Express, Axios, Morgan, Nodemon, Cors, Sequelize como ORM, y PostgreSQL como gestor de base de datos, para el front usé nextjs, redux, react-youtube,HTML,CSS entre otras cosas. debes crear un archivo ".env" en la carpeta "api".
Dentro de la misma deben ir tus credenciales para acceder a la base de datos. Las cuales son: 


DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost


(consejo: la clave por defecto, al instalar PostgreSQL es "admin". sin embargo debes tener en cuenta si haz ingresado alguna diferente)

una vez dentro de postgreSQL(yo uso la interfaz de texto, o shell) debes crear una base de datos:


CREATE DATABASE users;



con ello, ahora cada accion qué hagas en la app, estará interactuando con la base de datos local.

-vuelve a ubicarte en la carpeta "api" desde la terminal del visual studio code(o el editor de texto que uses) y levanta el servidor con el siguiente comando:

> npm start < (npm start levanta el servidor, y npm run dev,  el cliente(hecho con next.js), 
ambos deben estar levantados al mismo tiempo, desde 1 terminal cada uno para que la app arranque)

nodemon te avisará de cualquier cambio, y morgan de las solicitudes HTTPS qué reciba el Backend, y verás un mensaje del puerto actual, el cual es el 3001, el cliente levanta en el 3000.

-----------------

npm -v & node -v

version de npm que uso.
10.1.0

version de Nodejs que uso.
v20.11.0

en todo caso no deberia haber problemas si usas otras versiones, sin embargo recomiendo usar las ultimas versiones LTS actualmente.

puede que algunas dependencias demoren en instalarse porque la app es algo robusta. 
-----------------

-Features: 
-Persistencia en bases de datos
-Persistencia en sesion de usuario, con LocalStorage
-Formulario semi-controlado de registro, el cual almacena a los usuarios en la bdd
-Login con autenticacion directa a la base de datos
-seguridad para que solo alguien autenticado entre a la vista de "streaming"
-identificacion y diferenciacion entre moderadores y estudiantes
-chat en tiempo real.
-seguimiento de patrón de arquitectura MVC.
-entre otras cosas.



quedo a deber en estilos, quizá con algunas horas mas(tuve 16 para entregar la prueba) podria haberlo dejado bonito, sin embargo estoy bastante conforme con el correcto funcionamiento, más allá de lo esético.

Cualquier duda pueden escribirme al correo electrónico: nilroysozpa123@gmail.com
Buena suerte!
