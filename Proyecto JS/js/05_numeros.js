/*tipo de datos numerico*/
/*en js todos los numeros son tratados por igual*/

let numero1 = 10;
let numero2 = '200';
let numero3 = 10.5;
let numero4 = -5;
let numero5 = 25;

/*console.log(numero1);
console.log(numero2);
console.log(numero3);
console.log(numero4);
console.log(numero5);

console.log('numero1 es de tipo: ' + typeof numero1);
console.log('numero2 es de tipo: ' + typeof numero2);
console.log('numero3 es de tipo: ' + typeof numero3);
console.log('numero4 es de tipo: ' + typeof numero4);
console.log('numero5 es de tipo: ' + typeof numero5);*/

/*operador de asignacion*/

numero5 = 23;
//console.log(numero5);

/*operadores aritmeticos*/

let resultado = 0;

resultado = numero1 + numero5; //--- suma
console.log('numero1 + numero2 = ' + resultado);

numero1 = 5;

resultado = numero5 - numero1; //--- resta
console.log('numero5 - numero1 = ' + resultado);

resultado = numero1 * numero5; //--- multiplicacion
console.log('numero1 x numero5 = ' + resultado);

numero1 = 10

resultado = numero5 / numero1; //--- division
console.log('numero5 / numero1 = ' + resultado);

resultado = numero5 % numero1; //--- mod o modulo
console.log('numero5 % numero1 = ' + resultado);

numero4 = 5;

resultado = numero1 + numero4 * numero5;
console.log('Resultado = ' + resultado);

/* jerarquia de operaciones
	1. potencia, multiplicacion, division
	2. suma resta
*/

resultado = (numero1 + numero4) * numero5;
console.log('Resultado = ' + resultado);

/*si queremos cambiar la jerarquia de las operaciones debemos colocar en parentesis las operaciones que queremos que se realicen primero*/

/* operador de incrtemento */

let puntaje = 0;
console.log('puntaje inicial = ' + puntaje);

puntaje ++; //--- igual a escribir: puntaje = puntaje + 1
console.log('puntaje actual = ' + puntaje);

puntaje ++;
console.log('puntaje actual = ' + puntaje);

/*operador de decremento*/

puntaje --; //--- igual a escribir: puntaje = puntaje - 1
console.log('puntaje actual = ' + puntaje);