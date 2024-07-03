/* estructurta if / else */

let nota = 0;
nota = 4;

/* if */

if(nota >= 3){
	console.log(`Aprobó el curso`);
};

/*--------------------------------------------------------------------------------------------------------------------*/

/* if / else */

if(nota >= 3){
	console.log(`Aprobó el curso`);
}else{
	console.log(`No aprobó el curso`);
};

/*--------------------------------------------------------------------------------------------------------------------*/

/* if / else if */

let rol = 'VISITANTE';

if(rol === 'ADMINISTRADOR'){
	console.log('Acceso a todo el sistema');
}else if(rol === 'EDITOR'){
	console.log('Acceso a modificar');
}else if(rol === 'VISITANTE'){
	console.log('Acceso como visitante');
}else{
	console.log('Sin acceso al sistema')
};

/*--------------------------------------------------------------------------------------------------------------------*/

let celularOperador = '3001234567';
let pinOperador = '1234';
let celularUsuario = '3001234567'
let pinUsuario = '1234';

if(celularUsuario === celularOperador && pinUsuario === pinOperador){
	console.log(`datos correctos, puede retirar el dinero`);
}else{
	console.log(`datos incorrectos`)
};

/*--------------------------------------------------------------------------------------------------------------------*/

if(celularUsuario === celularOperador){
	if(pinUsuario === pinOperador){
		console.log(`Acceso concedido`);
	}else{
		console.log(`Pin incorrecto`);
	}
}else{
	console.log(`Celular incorrecto`);
};