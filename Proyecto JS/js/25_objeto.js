/* Objeto en JavaScript */

/* Forma 1 - Object Literal */

let producto = {
	nombre: 'Tablet',
	marca: 'Apix',
	precio: 500000
};

console.log(producto);
console.log(producto.nombre);
console.log(producto.marca);
console.log(producto.precio);

/* Forma 2 - Object Constructor (menos usado) */

function Producto(nombre, marca, precio){
	this.nombre = nombre;
	this.marca = marca;
	this.precio = precio;
}

let producto1 = new Producto('Monitor de 32 pulgadas', 'LG', 1000000);

console.log(producto1);
console.log(producto1.nombre);
console.log(producto1.marca);
console.log(producto1.precio);