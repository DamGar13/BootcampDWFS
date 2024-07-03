/* Objeto Math de js */

let resultado = 0;

/* porpiedad PI */

resultado = Math.PI;
console.log(resultado);

/* metodos */

//.round
resultado = 1.6;
console.log('Resultado redondeado: ' + Math.round(resultado)); //--- redondear
resultado = 1.4;
console.log('Resultado redondeado: ' + Math.round(resultado)); //--- redondear

//.ceil
resultado = 2.1;
console.log('Resultado redondeado: ' + Math.ceil(resultado)); //--- redondear hacia arriba

//.floor
resultado = 2.9;
console.log('Resultado redondeado: ' + Math.floor(resultado)); //--- redondear hacia abajo

//.sqrt
let numero = 3;
resultado = Math.sqrt(numero);
console.log('Raiz cuadrada de ' + numero + ' = ' + resultado);

//.abs
numero = -5;
console.log('Valor absoluto de ' + numero + ' = ' + Math.abs(numero));

//.min
resultado = Math.min(30, 5, 8, 2, 75, 15, 35);
console.log('el valor mas pequeño es: ' + resultado);

//.max
resultado = Math.max(30, 5, 8, 2, 75, 15, 35);
console.log('el valor mas grande es: ' + resultado);

//.random
resultado = Math.random(); //--- numero aleatorio entre 0 y 1
console.log('Numero aleatorio: ' + resultado);
resultado = Math.floor(Math.random() * 100); //--- numero aleatorio entre 0 y 100
console.log('Numero aleatorio: ' + resultado);