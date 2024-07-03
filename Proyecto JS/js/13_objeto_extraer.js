/* extraccion de propiedades */

let producto = {
	nombreProducto: "Monitor 20 pulgadas",
	precio: 300000,
	disponible: true
};

console.log(producto);

//--- forma anterior

//let precioProducto = producto.precio;
//let nombreProducto = producto.nombreProdcuto;

//console.log(precioProducto);
//console.log(nombreProducto);

//precioProducto = precioProducto + 50000;
//console.log(precioProducto);
//console.log(producto);

//--- nueva forma Destructuring

let {precio, nombreProducto} = producto;
console.log(nombreProducto);
console.log(precio);
