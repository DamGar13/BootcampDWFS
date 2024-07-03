/* concepto objeto en js */

let nombreProdcuto = "Monitor 20 pulgadas";
let precio = 300000;
let disponible = true;

//console.log(nombreProdcuto);
//console.log(precio);
//console.log(disponible);

let producto = {
	nombreProdcuto: "Monitor 20 pulgadas",
	precio: 300000,
	disponible: true
}

console.log(producto);

/* formas de acceder a las propiedades de un objeto*/

/* forma 1 sintaxis de punto (.)*/

console.log(producto.nombreProdcuto);
console.log(producto.precio);
console.log(producto.disponible);

/* forma 2 sintaxis de corchete []*/

console.log(producto['nombreProdcuto']);
console.log(producto['precio']);
console.log(producto['disponible']);