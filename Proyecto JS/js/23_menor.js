/* encontrar el numero menor en un array */

let numero = [];
let menor = 0;
let i = 0;
let j = 0;

for(let aleatorio = 0; aleatorio < 20; aleatorio++){
	resultado = Math.floor(Math.random() * 100);
	numero[numero.length] = resultado
}

console.log(numero)

while(i < numero.length){
	for (j = 1; numero[i] <= numero[j]; j++){
		menor = numero[i]
	}
	i = j;
}

console.log(menor);

/*let numero = [15, 79, 20, 78, 32, 28, 96, 52, 50, 16, 45, 80, 100];
let min = numero[0];

for (let i = 1; i < numero.length; i++){
	if(numero[i] < min){
		min = numero[i]
	}
}
console.log("El numero menor es: "+ min);

let numero = [15, 79, 28, 103, 78, 32, 28, 96, 52, 71, 35];
let i=0;

for (i=0; i<=numero.length; i++){
	let menor = Math.min(...numero);
	console.log(`el numero menor del arreglo es : ${menor}`);
}*/

