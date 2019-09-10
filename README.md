## Descripción

Liga Manager es un proyecto generado con [Create React App](https://github.com/facebook/create-react-app).<br>
Se ha utilizado React/Redux, Redux-observable, React-router, entre otras muchas librerías, haciendo uso además de los Hooks de React.

La aplicación consiste en un simulador de gestión de plantillas de fútbol que contiene las siguientes secciones

-   La pantalla inicial de **login**, permite hacer un inicio de sesión real con una cuenta de Google.
-   Una **cabecera** que muestra la fotografía y el nombre asociados a la cuenta de Google con la que se ha iniciado sesión.
-   Un **menú lateral** que nos permite navegar por la aplicación y hacer logout.
-   Una pantalla de **inicio** que facilita el acceso a las dos secciones principales : el mercado de fichajes y la alineación.
-   En la sección del **mercado de fichajes** tenemos un listado paginado de los jugadores disponibles, esta información inicial se carga haciendo uso de la siguiente [API](https://reqres.in/). Además de mostrar el listado, podemos añadir nuevos jugadores al mercado de fichajes, editar la posición de los existentes y eliminarlos.
-   En la sección de **alineación** podemos crear nuestra propia plantilla. Se seleccionan las posiciones dentro del campo y se asignan a los juagdores que hayamos personalizado en la anterior sección.

En cada una de las secciones se puede encontrar un icono de ayuda que explica el funcionamiento de las mismas.

Es importante remarcar, que al ser un proyecto de prueba enfocado al front, no existe una persistencia real sino una simulada, mientras se navegue por la aplicación no se perderá la información, sin embargo, al hacer logout se perderán los cambios realizados.

## Scripts

En este proyecto los scripts usados son:

### `npm install`

Instala las dependencias necesarias para el correcto funcionamiento del proyecto.

### `npm start`

Lanza la aplicación en modo desarrollador<br>
Abre [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

### `npm run build`

Construye la aplicación en modo producción en la carpeta `build`.
