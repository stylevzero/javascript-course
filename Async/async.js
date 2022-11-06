
// Callbacks

// Example library => npm install request

let request = require("request");

// Request (petición url, callback)
request("https://www.google.com", function(){
    console.log("Terminé la petición");
});

console.log("Esto se ejecuta después");

// Promesas
// Surgen como una alternativa a la sintaxis del callback

