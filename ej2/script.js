//Enunciado: Tienes el estado actual del carrito de la compra de un usuario. El usuario ha decidido modificar las unidades del artículo con id: 102 a 3 unidades. Recuerda las normas de los frameworks modernos: no puedes mutar el objeto original. Utiliza el método .map() y el operador Spread (...) para devolver un carrito totalmente nuevo con el dato actualizado [1.2]

const carritoOriginal = [
  { id: 101, articulo: "Teclado", precio: 45, cantidad: 1 },
  { id: 102, articulo: "Cable HDMI", precio: 12, cantidad: 1 },
];

// Tu código aquí abajo (recuerda que carritoOriginal debe quedar intacto):
const carritoActualizado = carritoOriginal.map(item => {
    if (item.id === 102) {
        return { ...item, cantidad: 3 };
    } else {
        return item;
    }
})
console.log(carritoOriginal);
console.log(carritoActualizado);