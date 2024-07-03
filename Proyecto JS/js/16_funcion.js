/* ejemplo de funcion */

let total = 0; //---variable global (en todo el programa)
let totalAPagar = 0;

function agregarCarrito(precio){
	let subtotal = 0; //---variable local (solo dentro de la funcion)
	total += precio;
	return total
};

function calcularImpuesto(subtotal){
	let iva = 0.19;
	let calculo = 0;
	calculo = subtotal + (subtotal * iva);
	return calculo;
}

total = agregarCarrito(10000);
total = agregarCarrito(20000);
total = agregarCarrito(30000);
console.log(total);

totalAPagar = calcularImpuesto(total);
console.log(`El total a pagar con impuestos es de $ ${totalAPagar}`)