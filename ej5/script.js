/**
 * Enunciado: Diseña una función asíncrona llamada buscarPostPorId(postId) que realice una petición HTTP mediante fetch a la URL de pruebas https://typicode.com (sustituyendo ID por el parámetro recibido).

El ejercicio debe cumplir obligatoriamente las siguientes fases:

    Capturar los datos devueltos (un único objeto con las propiedades title y body).
    Localizar un contenedor HTML con el id #resultado-busqueda.
    Inyectar dentro del contenedor el título del post en mayúsculas y el cuerpo del mismo empleando plantillas literales (innerHTML).
    Implementar un bloque try/catch para que, si el post no existe o la red falla, se pinte dentro del contenedor el mensaje de error: "No se ha podido recuperar el post solicitado".
 */

// Tu código aquí abajo:
async function buscarPostPorId(postId) {
    const contenedor = document.getElementById('resultado-busqueda');
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/posts/' + postId);
        if (!response.ok) {
            throw new Error ('Post no encontrado :(');
        }
        const post = await response.json();
        contenedor.innerHTML = '<h2>' + post.title.toUpperCase() + '</h2><p>' + post.body + '</p>';
    } catch (error) {
        contenedor.innerHTML = '<p>No se ha podido recuperar el post solicitado</p>';
    }
}