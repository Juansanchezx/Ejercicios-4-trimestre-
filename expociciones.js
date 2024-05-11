// // Guardar un valor en localStorage:
// localStorage.setItem('clave', 'valor');
// // Esto guarda el valor 'valor' con la clave 'clave' en el localStorage.


// // Recuperar un valor de localStorage:
// var valor = localStorage.getItem('clave');
// // Esto recupera el valor almacenado con la clave 'clave' y lo asigna a la variable 


// // Eliminar un valor de localStorage:
// localStorage.removeItem('clave');

// //1///

// window.localStorage.setItem('usuario','juan');
// const usuario = window.localStorage.getItem ('usuario');
// console.log(usuario);

// //2//
// window.addEventListener('DOMcontenLoaded', (event)=>{
//     console.log ('DOM completamente cargado y analizado');
// }) ;

// //3//

// window.open('https://www.ejemplo.com');


// //4//

// var section = document.getElementById('section');
// var texto = section.innerText;
// console.log(texto); 

// //5//

// var article = document.getElementById('article');


// article.innerText = "Este es un texto.";

// //6//


// function modificarTexto() {
//     var parrafo = document.getElementById('miParrafo');
//     parrafo.innerText = "¡Este es un nuevo texto!";
//   }
// //7//

// //8//

// function modificarHTML() {
//     var main = document.getElementById('main');
//     main.innerHTML = "<p>¡Este es un nuevo párrafo!</p>";
//   }


//   //9//

//   function crearElemento() {
//     var nuevoElemento = document.createElement('p');
//     nuevoElemento.innerHTML = "<strong>¡Este es un nuevo elemento con contenido HTML!</strong>";
//     document.getElementById('contenedor').appendChild(nuevoElemento);
//   }