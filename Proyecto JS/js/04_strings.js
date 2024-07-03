/*tipo de datos string --- cadena de caracteres*/

let producto1 = 'Monitor LED 20 Pulgadas';
let email = 'unnuevocorreo@gmail.com'
let precio = 50000;
let impuesto = 0.15;

let producto2 = String('Monitor HD de 42 pulgadas'); //---constructor


console.log(producto1);
console.log(email);

//--String tambien se usa para cadena de caracteres
console.log(producto2);

//--Operador + es para concatenacion
console.log('Producto 2: ' + producto2);

//-saber el tipo de datos
console.log('Producto 1 es de tipo: ' + typeof producto2);
console.log('Email es de tipo: ' + typeof email);
console.log('Precio es de tipo: ' + typeof precio);
console.log('Producto 2 es de tipo: ' + typeof producto2);
console.log('Impuesto es de tipo: ' + typeof impuesto);

//length es una propiedad para la longitud

let cantidad_caracteres = producto2.length;
let cantidad_caracteres2 = producto1.length;
let cantidad_caracteres3 = email.length;
console.log(cantidad_caracteres);
console.log(cantidad_caracteres2);
console.log(cantidad_caracteres3);

/*Metodos de los String*/
//Indexof (retorna la pocision de la primera coincidencia)
console.log(producto2.indexOf('HD'));
console.log(producto2.indexOf('Tv'));
console.log(email.indexOf('@'));


//Includes (retorna true o false)
console.log(producto2.includes('HD'));
console.log(producto2.includes('Tv'));
console.log(email.includes('@'));

//split 

let cadenaMeses = "Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre";
console.log(cadenaMeses)
let meses = cadenaMeses.split(", ");
console.log(meses);