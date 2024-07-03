/* script */

// fetch("https://jsonplaceholder.typicode.com/posts")
// 	.then( response => response.json())
// 	.then( data => console.log(data))
// 	.catch(error => console.log('Error', error));


fetch("https://jsonplaceholder.typicode.com/posts")
	.then( respuesta => respuesta.json())
	.then( datos => {
		// console.log(datos);
		// let titulo = document.querySelector(".titulo").textContent = datos[99].title;
		// let contenido = document.querySelector(".contenido").textContent =  datos[99].body;

		datos.forEach((publicacion) => {
			document.querySelector(".contenedor-padre").innerHTML += `<div class="tarjeta">
									<div class="titulo"> ${publicacion.title} </div>
									<p class="contenido">${publicacion.body}</p></div>`

		})

	})
	.catch(error => console.log('Error', error));




// let titulo = document.querySelector(".titulo").textContent = "Titulo desde JS";
// let contenido = document.querySelector(".contenido").textContent = "Contenido desde JS";

