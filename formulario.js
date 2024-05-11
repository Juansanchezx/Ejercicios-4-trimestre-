let boton = document.querySelector("#btn");

function guardarNombre(){
  if(nombre.value){
    let nombre = document.querySelector("#nombre").value;
    console.log(nombre);

    let item = document.createElement("li");
    item.textContent = nombre; 
    let lista = document.querySelector("#resultado"); 
    lista.appendChild(item); 



    let btnEliminar = document.createElement("button")
    btnEliminar.addEventListener("click", eliminarUser);
    item.append(btnEliminar)
    btnEliminar.textContent = "X";
    btnEliminar.classList.add("botonelimated")

//     btnEliminar.addEventListener("click",
//     function(){
//         while(lista.firstChild){
//             lista.removeChild(lista.firstChild);
//         }
//     }
// )



    
  }else{
    alert("hp no has escrito nada");
  }
}
function eliminarUser(e){
    let eliminar = e.target.parentNode;
    eliminar.remove();
}
