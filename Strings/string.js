// Primitivo "" ''
let language = "javascript";
console.log(language.length)

// Objeto
let backend = String("Node.js");

console.log(typeof language);
console.log(typeof backend);

// Caracteres especiales
// Escaping
// "\"

console.log("Javascript: \" Backend \"");

// Concatenación

// +
console.log("Hello " +  "World");

// concat

let a = "Hello ";
let b = "World";
console.log(a.concat(b));

// Interpolation

// Template literals -> template strings

let template = `Hello ${b}, welcome`;
console.log(template);

// 1-9 => 01
// 11 o 12 => 11, 12

let mes = "3";
//let mes = "12";
//let mes = "";
console.log(mes.padStart(2, "0"));

// Comparación de cadenas

// <, >, <=, >=, ==

/*
console.log("A">"B");
console.log("a">"B");
console.log("A">"a");
*/

// local compare

// Iguales = 0
// A> B -1 en el orden de aparición
// B> A 1

console.log("A".localeCompare("z"));
console.log("a".localeCompare("b"));
console.log("a".localeCompare("B"));

console.log("A".localeCompare("a"));
console.log("Z".localeCompare("a"));
console.log("b".localeCompare("b"));

console.log("A".localeCompare("a"));



console.log("A".toLowerCase().localeCompare("a".toLowerCase()));
console.log("A".toLowerCase() == "a".toLowerCase());


let prueba = "hello";
let segunda_prueba = prueba.toUpperCase();
console.log(prueba);
console.log(segunda_prueba);
