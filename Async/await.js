// La palabra reservada await hace que la ejecución del código espere a que una promesa sea resuelta.
// Evitando que escribas then o que constantemente tengas uq eestar creando funciones anonimas para el 
// manejo de una promesa  

(async function() {
    let resultado = await new Promise((resolve, reject) => {
        setTimeout(resolve, 400, 5)
});
let valorDos = await new Promise((resolve, reject) => {
    setTimeout(resolve, 400, 10)
});
    console.log(resultado + valorDos);
})();

//promesa.then((resultado => { console.log(resultado)}));