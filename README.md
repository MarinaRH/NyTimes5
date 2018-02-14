# NY TIMES

* **Track:** _Common Core_
* **Curso:** _CONSTRUYE UNA SINGLE PAGE APP (SPA) MULTI-USUARIO CONSUMIENDO DATA REMOTA_
* **Unidad:** _¿QUÉ SIGNIFICA TRAER DATOS DE UN SERVIDOR ASÍNCRONAMENTE?_

***

## OBJETIVO

* Para este ejercicio guiado queremos hacer una petición a la página del NY Times y que con la respuesta podamos ocupar sus noticias.

## FLUJO
1. Crea una cuenta de desarrollador aquí https://developer.nytimes.com/ Nos enviarán una clave de acceso, con ella haremos las peticiones

2. Crea un proyecto con sus archivos HTML, CSS y JS (Nuestro HTML tiene una estructura sencilla pero tú puedes darle el estilo que prefieras)

3. En nuestro archivo app.js nos traemos los elementos que usaremos y creamos un let sin asignarle valor por el momento,A nuestro formulario le agregamos el evento submit y las instrucciones a ejecutar

4. Hacemos uso del método .open() y es aquí donde debemos poner la clave que llegó a nuestro correo, sustituyendo < TU KEY > por tu clave .Las propiedades **.onload** y **.onerror** tienen asignadas sus funciones correspondientes.Enviamos la petición con el método **.send()**.

5. Vamos a empezar a trabajar con la función addNews().Primero podemos hacer un console.log de this.responseText para saber que nos va a entregar esta respuesta (Un JSON).Ya que vimos que tipo de información nos devolvió, podemos proceder con guardarlo en una const y hacer de nuevo un console.log para entender mejor la estructura de los datos.

6. A partir de este punto ya podemos jugar e investigar este JSON que tenemos en consola y por lo tanto ya podemos hacer uso de sus propiedades.Creamos un **li**, le añadimos una clase para que tenga estilos, le agregamos texto que obtuvimos del JSON y lo anexamos al **ul**.

## RECURSOS

. Html,css,Javascript
. Node
. Express (dependencia)
. gitignore.
. Api Ny Times.

