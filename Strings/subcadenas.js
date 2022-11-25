console.log("Hola"[0]); //H

let cadena = "Javascript";

for (const caracter of cadena){
    console.log(caracter);
}

// Substring
console.log(cadena.substring(0,4));

// Slice
console.log(cadena.slice(0,4));

// Con el valor negativo, empieza a contar de atrás hacia adelante
console.log(cadena.slice(-5,4));