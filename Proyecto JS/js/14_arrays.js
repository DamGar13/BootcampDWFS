/* arreglos */
let numeros = [5, 30, 2, 75, 50, 28];
console.log(`Array de numeros: ${numeros}`);
console.table(numeros); // dibuja una tabla para el arreglo

let nombres = ['Juan Pablo', 'Angelica Maria', 'Luis Enrique', 'Sara Valentina'];
console.table(nombres);

/* acceder a los datos del array por su indice */

console.log(nombres[2]);
console.log(numeros[3]);

numeros[3] = 85;
console.log(numeros[3]);

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.table(meses);

let arreglo = ['Hola', 10, true, 'Juan']; // arreglo con distintos tipos de datos
console.table(arreglo);
console.log(arreglo[3]);

/* length: propiedad que muestra el numero de elementos de un arreglo */

console.log(`longitud del arreglo: ${numeros.length}`);

/* metodos basicos */

//--- push: agrega elementos al final del arreglo
numeros.push(15);

numeros = [5, 30, 2, 75, 50, 28, 15, 46]; // otra forma de agregar elementos es redeclarando el arreglo

numeros[8] = 96; // otra forma de agregar elementos es insertando un valor directamente al indice

numeros[numeros.length] = 52; // otra forma de agregar elementos es con .length que agrega un valor en el ultimo indice

console.table(numeros);

numeros.push(70, 80, 90); // se pueden agregar mas de un elemento al mismo tiempo
console.table(numeros);

//--- unshift: agrega elementos al final del arreglo
numeros.unshift(3, 4, -10);
console.table(numeros);

//--- pop: elimina el ultimo elemento del arreglo
meses.pop();
console.table(meses);

//--- shift: elimina el primer elemento del arreglo
meses.shift();
console.table(meses);

//--- shift: elimina desde parametro 1 la cantidad de elemento de parametro 2
numeros.splice(2, 10);
console.table(numeros);