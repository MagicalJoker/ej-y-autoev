//Enunciado: Crea una estructura HTML básica con un contenedor vacío (<div id="contenedor-usuarios"></div>). Utilizando el siguiente array de datos simula la creación manual de "tarjetas de usuario". Debes recorrer el array y, por cada objeto, crear dinámicamente un elemento de tipo div, inyectar el nombre en un encabezado <h3>, el correo en un párrafo <p> y añadirle la clase CSS .card-usuario. Finalmente, introduce cada tarjeta dentro del contenedor principal usando .appendChild()

const usuariosLocales = [
  { id: 1, nombre: 'Ana Gómez', email: 'ana@ies.es' },
  { id: 2, nombre: 'Luis Martínez', email: 'luis@ies.es' }
];

// Tu código aquí abajo:
const contenedor = document.getElementById('contenedor-usuarios')
usuariosLocales.forEach(usuario => {

    const tarjeta = document.createElement('div')
    tarjeta.classList.add('card-usuario')

    const nombre = document.createElement('p')
    nombre.textContent = usuario.nombre
    
    const correo = document.createElement('p')
    correo.textContent = usuario.email


    tarjeta.appendChild(nombre)
    tarjeta.appendChild(correo)
    contenedor.appendChild(tarjeta)

});