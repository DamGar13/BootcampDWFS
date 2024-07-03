/* operadores o conectores logicos 
se usa cuando se evalua mas de una condicion*/

let valorUno = true;
let valorDos = false;

/* operador Y &&*/

console.log(valorUno && valorDos); // solo se cumple si los dos valores son true, devuelve true o false

/* operador O ||*/

console.log(valorUno || valorDos); // se cumple si alguno de los dos valores es true, devuelve true o false

/* operador de negacion !*/

console.log(!valorUno); // se cumple si la condicion es contraria, devuelve true o false
console.log(!valorDos);