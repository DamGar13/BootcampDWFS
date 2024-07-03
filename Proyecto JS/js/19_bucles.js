/* estructuras repetitivas o bucles */

/* Estructura FOR */

for(let i = 0; i <= 10; i++){
	console.log(i);
}

console.log('aqui voy');

/*-----------------------------------------------------------------------------------------------------*/

/*for(let i = 1; i <= 50; i++){
	if (i % 2){
		console.log(`${i} es iMPAR`);
	};
	else{
		console.log(`${i} es PAR`);
	};
};*/

for(let i = 1; i <= 10; i++){
	if ((i % 2) == 1){
		console.log(`${i} es PAR`);
	}
	else{
		console.log(`${i} es IMPAR`);
	};
};

/*-----------------------------------------------------------------------------------------------------*/

/* Estructura WHILE */

let contador = 0;
while(contador <= 100){
	console.log(contador);
	contador += 2;
};

console.log('aca voy');

/*-----------------------------------------------------------------------------------------------------*/

/* Estructura DO WHILE */

let i = 11;
do{
	console.log(i);
	i ++;
} while (i <= 10);

console.log(i);
console.log('sigo aca');

/*-----------------------------------------------------------------------------------------------------*/

let x = 1;

/*while (x <= 5){
	for(let y = 1; y <= 10; y++){
		console.log(`${x} * ${y} = ${x * y}`)
	}
	x++
}*/

let x = 1;
function tablaM(x){
	for(let y = 1; y <= 10; y++){
		console.log(`${x} * ${y} = ${x * y}`)
	}
}

while (x <= 5){
	tablaM(x)
	x++
}
