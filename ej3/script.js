//Enunciado: Crea una función asíncrona llamada obtenerPostPorUsuario(userId) que realice una petición fetch a la API pública https://typicode.com. Debes esperar los datos, filtrarlos para quedarte únicamente con los posts que coincidan con el userId pasado por parámetro, y mostrar por consola los títulos de dichos posts [1.3]. Utiliza la estructura try/catch para capturar posibles errores.

// Tu código aquí abajo:
async function obtenerPostPorUsuario(userId) {
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json();
        const postsFiltrados = data.filter(post => post.userId === userId)
        postsFiltrados.forEach(post => console.log(post.title));
    } catch (error) {
        console.error('Error al obtener los posts:', error);
    }
}

// Ejecución de prueba:
obtenerPostPorUsuario(2);