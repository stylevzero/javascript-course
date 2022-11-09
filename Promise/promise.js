/*
let promesa = new Promise(function(res, rej){
    res(10);
    rej("Algo salió mal");
});
*/
let request = require('request');

function leerPagina(url){
    return new Promise(function(resolve, reject){
       request(url,function(error, response){
        if (error) return reject(error);

        resolve(response);

       });
    });
}

let promesa = leerPagina("https://www.google.com");
promesa.then(r => console.log(r)).catch(err => console.log(err));
//promesa.then(r => console.log("Finalicé en promesa")).catch(err => console.log(err));
