console.log("Colores");

let botonAmarillo = document.querySelector("#Amarillo");
let botonRojo= document.querySelector("#Rojo");
let botonAzul= document.querySelector("#Azul");


// let body = document.getElementsByTagName("body");

botonAmarillo.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color Amarillo");
        document.body.style.backgroundColor = 'yellow';
    }
)
botonRojo.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color rojo");
        document.body.style.backgroundColor = 'Red';
    }
)
botonAzul.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color azul");
        document.body.style.backgroundColor = 'blue';
    }
)



let body = document.querySelector("body");
let cuadro = document.querySelector("cuadro");
let cuadrobotonAmarillo= document.querySelector("#Amarillo");
let cuadrobotonRojo= document.querySelector("#Rojo");
let cuadrobotonAzul= document.querySelector("#Azul");
let cuadrobotonGris= document.querySelector("#Gris");
let cuadrobotonSincolor= document.querySelector("#Sincolor");

cuadritobotonAmarillo.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color amarillo");
        cuadrito.style.backgroundColor = 'yellow';
    }
)
cuadritobotonRojo.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color rojo");
        cuadrito.style.backgroundColor = 'red';
    }
)
cuadritobotonAzul.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color Azul");
        cuadrito.style.backgroundColor = 'blue';
    }
)
cuadritobotonGris.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color gris");
        cuadrito.style.backgroundColor = 'gray';
    }
)

console.log(cuadrito)