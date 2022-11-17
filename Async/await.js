// La palabra reservada await hace que la ejecución del código espere a que una promesa sea resuelta.
// Evitando que escribas then o que constantemente tengas uq eestar creando funciones anonimas para el 
// manejo de una promesa  

/*
// Ejemplo sin await
let resultadoSinAwait = new Promise((resolve, reject) => {
        setTimeout(resolve, 400, 5)
});

//resultadoSinAwait.then((resultado)=> { console.log(resultado) });
resultadoSinAwait.then((resultado => { console.log(resultado)}));
*/

/*
// Ejemplo con await 
// (debemos usarlo dentro del cuerpo de una función Async)
(async function() {
    let resultado = await new Promise((resolve, reject) => {
        setTimeout(resolve, 400, 5)
});
let valorDos = await new Promise((resolve, reject) => {
    setTimeout(resolve, 400, 10)
});
    console.log(resultado + valorDos);
})();
*/

// npm install node-fetch
// import fetch from "node-fetch"
import fetch from 'node-fetch';


async function showGithubInfo(){
    let response = await fetch("https://api.github.com//users/stylevzero/repos"); 
    let repos = await response.json();
    console.log(repos);
}
showGithubInfo();