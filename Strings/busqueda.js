let cadena = "Hello World";

// indexOf

// Si no lo encuentra devuelve -1
if(cadena.indexOf("prueba") > 0) console.log("encontrado");

// includes

// Devuelve true si lo encontró
if(cadena.includes("Hello")) console.log("Encontrado");

console.log(cadena.indexOf("o"));       // 4
console.log(cadena.lastIndexOf("o"));   // 7

let link = "https://www.google.com";
let archivo = "imagen.jpg";

if(link.startsWith("https")) console.log("Es un link seguro");

if(archivo.endsWith(".jpg")) console.log("Es una imagen");