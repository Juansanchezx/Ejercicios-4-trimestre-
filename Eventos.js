console.log(`eventos del DOM`);
let parrafo = document.querySelector(`p`);
console.log(parrafo);

parrafo.addEventListener(`click`, () =>{
    console.log(`me hiciste click`)
})

