/* agregar o eliminar propiedades de un objeto*/


let producto = {
	nombreProdcuto: "Monitor 20 pulgadas",
	precio: 300000,
	disponible: true
}

console.log(producto);

/* agregar propiedades */

producto.imagen = 'monitor.jpg';
producto.dimension = '30 cms';

console.log(producto);

/* eliminar propiedades */

delete producto.disponible;

console.log(producto);