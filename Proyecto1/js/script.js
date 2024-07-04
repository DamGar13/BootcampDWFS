const datos = {
    nombre:"",
    celular:"",
    correo:"",
    mensaje:"",
}

// Eventos de los input

const nombre = document.querySelector("#nombre");
const celular = document.querySelector("#celular");
const correo = document.querySelector("#correo");
const mensaje = document.querySelector("#mensaje");

/*console.log(nombre);
console.log(celular);
console.log(correo);
console.log(mensaje);*/

// prueba event listener
/*nombre.addEventListener("input", prueba);
function prueba(){
    alert("ingresaste el nombre");
}*/

nombre.addEventListener("input", leerTexto);
celular.addEventListener("input", leerTexto);
correo.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

function leerTexto(evento){
    //console.log(evento.target.value);
    datos[evento.target.id] = evento.target.value;
    //console.log(datos);
}

const formulario = document.querySelector(".formulario");
//console.log(formulario)
formulario.addEventListener("submit",function(evento){
    evento.preventDefault();
    //destructuring
    const{nombre, celular, correo, mensaje} = datos;
    //console.log(nombre, celular, correo, mensaje);
    if (nombre === "" || celular === "" || correo === "" || mensaje === ""){
        //console.log("Todos los campos son obligatorios");
        mostrarError ("Debe diligenciar todos los campos");
        return; //corta la ejecucion del codigo
    }

    function mostrarError(mensaje){
        //console.log(mensaje)
        let error = document.createElement("div");
        error.textContent = mensaje;
        error.classList.add("error")
        //console.log(error);
        formulario.appendChild(error);
    }
})