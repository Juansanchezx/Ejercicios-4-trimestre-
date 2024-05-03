function pasarnombre() {
    let nodalinput = document.querySelector("#nombre").value;
    let creado = document.createElement("li");
    creado.append(nodainput)
    let divi = document.querySelector("div");
    divi.append(creado);
}
