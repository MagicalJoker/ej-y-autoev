//Enunciado: 
// Dado el siguiente array de productos tecnológicos, genera un nuevo array que contenga únicamente los productos que pertenezcan a la categoría 'componentes' y cuyo precio sea superior a 50€. Utiliza exclusivamente métodos funcionales de arrays (filter).

const stock = [
  { id: 1, nombre: "Ratón óptico", precio: 25, categoria: "perifericos" },
  { id: 2, nombre: "Memoria RAM 16GB", precio: 85, categoria: "componentes" },
  { id: 3, nombre: "Monitor 4K", precio: 320, categoria: "perifericos" },
  { id: 4, nombre: "Disco SSD 1TB", precio: 65, categoria: "componentes" },
];

// Tu código aquí abajo:
const componentesFiltrados = stock.filter(producto => producto.categoria === 'componentes' && producto.precio > 50)
console.log(componentesFiltrados);