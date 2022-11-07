
// Callbacks

// Example library => npm install request

//let request = require("request");
let request = require("request-promise");

/*
// Request (petición url, callback)
request("https://www.google.com", function(){
    console.log("Terminé la petición");
});

console.log("Esto se ejecuta después");
*/

// Promesas
// Surgen como una alternativa a la sintaxis del callback
// Una promesa es un objeto que problamente produzca un valor en el futuro
// este valor puede ser el resultado de una operación asincrona 
// o un error arrojado durnate la ejecución de código

// npm install request-promise

// Estados de una promesa

/*
fullfiled: 0 completada, significa que la promesa se completó con éxito
rejected: 0 rechazada, significa que la promesa no se completó con éxito
pending: 0 pendiente, que el estado de la promesa cuando la operación no ha terminado, aquí decimos que la promesa no se ha completado
settled: 0 finalizada, cuando la promesa terminó ya sea con éxito o con algún error
*/

let promesa = request("https://www.google.com");

promesa.then(function(){ // la promesa se completó con éxito
        console.log("Terminé la petición");
})
promesa.catch(function(err){  // Cuando la promesa fue rejected o finalizo con algún problema o algún error
    console.log(err);
});
promesa.finally(function(err){ // Ejecuta código independientemente de si la promesa se completó con éxito o falló
    console.log();
})
console.log("Esto se ejecuta después");

// Callback de las promesas

