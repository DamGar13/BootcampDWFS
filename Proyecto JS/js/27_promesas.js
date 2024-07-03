/* Promise - algo que puede pasar ahora o en el futuro */

let usuarioAutenticado = new Promise((resolve, reject) => {
	/* peticion al servidor que valide el usuario y clave */
	let autenticado = false;
	if (autenticado){
		resolve(`Usuario Autenticado`); //--- el promise se cumplió
	}else{
		reject(`No se puede iniciar sesion`) //--- el promise no se cumplió
	}
});

//console.log(usuarioAutenticado)

/*
	En los promises se tienen 3 estados:
	Pending: No se ha cumplido pero tampoco se ha rechazado
	Fullfilled: se cumplió el promise
	Rejected: se rechazó o no se pudo cumplir el promise

*/

usuarioAutenticado
	.then(resultado => console.log(resultado))
	.catch(error => console.log(error))