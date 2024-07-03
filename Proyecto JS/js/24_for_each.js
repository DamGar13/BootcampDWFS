/* estructura for each para recorrer arreglos */

let productos = [
	{nombre: 'Monitor 20 pulgadas', precio: 250000},
	{nombre: 'Televisor 32 pulgadas', precio: 350000},
	{nombre: 'Tablet 10 pulgadas', precio: 280000},
	{nombre: 'Teclado Genius', precio: 60000},
	{nombre: 'Bocinas', precio: 120000},
];

productos.forEach(function(producto){
	console.log(producto)
});

productos.forEach(function(producto){
	console.log(producto.nombre)
});

productos.forEach(function(producto){
	if (producto == productos[2]){
		console.log(producto)	
	}
	
});