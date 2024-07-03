/* Async / Await */

function descargarNuevosClientes(){
	return new Promise(resolve =>{
		console.log(`Descargando clientes... espere por favor...`);
		//--- simular el tiempo de respuesta descargando clientes
		setTimeout(() => {
			resolve(`Los clientes fueron descargados`);
		}, 15000);
	});
}

/* Prueba 1 funcion sin Async */

/*function app(){
	console.log(`Aplicacion lista`);
}

app();*/

/* Prueba 2 funcion con Async y try catch --- queda en pending */

/*async function app(){
	try{
		let resultado = descargarNuevosClientes();
		console.log(resultado);
	}
	catch{
		console.log(resultado);
	}
}

app();*/

/* prueba 3 con async + try catch + await */

async function app(){
	try{
		let resultado = await descargarNuevosClientes();
		console.log(resultado);
	}
	catch{
		console.log(resultado);
	}
}

app();

console.log(`Este codigo no se bloquea`);