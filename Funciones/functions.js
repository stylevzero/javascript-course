// Funciones

// Declaración de función
function saludar() {
    console.log("Hola Devs");
}
  
function cuadrado(numero){
    return numero * numero;
    console.log("Hola");
}

let cuadrado_de_dos = cuadrado(2);
//saludar();

// Expresión de función
// let func = function saluda() {}
// function(); // Solo se puede usar despues declararla

// Scope - Alcance

/* 
Scope global
Scope local
*/

/*
var minombre = "stylevzero"; // Scope global
console.log(minombre);
*/

var minombre = "stylevzero"; // Scope global

function EjemploDeSaludo() {
    var minombre = "ejemplo"; // Scope local
    console.log("Hola " + minombre);
}

EjemploDeSaludo();
console.log(minombre);

// Alcance

function ejemplo(nombre) {
if(nombre){
    //var saludo = "Hola " + nombre;
    let saludo = "Hola " + nombre;  // let o const -> alcance dentro del bloque 
    console.log(saludo);            // var -> alcance dentro de la función más próxima
}
//console.log(saludo);
}
ejemplo("Demo");

// Argumentos de funciones
function numeroCuadrado(numero = 20) { // Si no recibe un parametro se le asigna el valor 20
    console.log(numero);
    return numero * numero;
}

//result = numeroCuadrado(2);

//let result = numeroCuadrado(2,3,4,5,6,7); // 
//let result = numeroCuadrado(); // 
let result = numeroCuadrado(15); // Si se le envía un argumento se ignora el valor por defecto
console.log(result);

function saludoInicial(apellido, nombre=""){ // Se debe incluir al final los parametros que tenga valore por defecto
console.log(nombre, apellido);
}
saludoInicial("mi apellido");

function sumaTodos(){
console.log(arguments); // Impresión de todos los argumentos que se han enviado
}
sumaTodos(1,2,3,4);

// Pasar por valor y referencia (Una vez ejecutada la función)

// Referencia -> parametro apunta a la misma dirección que el argumento original
// Valor -> se envia una copia del argumento original


// Ejemplo de Valor
/*
let edad = 20;
function modificador(edad){
    edad = 25;
    console.log("Dentro de la función " + edad);
}
console.log(edad);
modificador(edad);
console.log(edad);
*/

// Ejemplo de Referencia

// Las estructuras como objetos son enviados como referencia
let edades = [20];
function modificador(edades){
    edades[0] = 25;
    console.log("Dentro de la función " + edades);
}

console.log("-- Ejemplo de referencia --");
console.log(edades);
modificador(edades);
console.log(edades);


// Funciones puras
// No producen efectos secundarios

let arreglo = [1,2,3];
arreglo[0] = 2;  // Mutación

let valor = 2;
valor += 1;      // Mutación

// Ejemplo de función pura

let valores = [20];
function modify(valores){
    let copia = [...valores]; // Creamos una copia
    copia[0] = 25;            // Modifico la copia y no el valor original
    return copia; 
}

console.log("-- Funciones puras ejemplo --");
console.log(valores);
modify(valores);
console.log(valores);

// First class objects

// Un tipo de dato puede ser asignado a una variable, retornado o enviado como argumento

/* 
Se debe poder retornar
Se debe poder asignar a una variable
Se debe poder enviarlo como argumento
*/

console.log("--  First class objects --");

function ejecutar(funcion){
    funcion();
}

function decirHola(){
    console.log("Hola");
}
ejecutar(decirHola);

function sumaTodos(){
    let suma = 0;
    for (let i = 0; i < arguments.length ; i++) {
        suma += arguments[i];
    }
}

function sumarTodosNueva(){
    return Array.from(arguments).reduce((acc, argument) => argument + acc ,0);
}

console.log(sumarTodosNueva(1,2,3,4));

function build(){
    function a(){ console.log("Demostracion"); }
    return a;
}

let f = build();

f();



console.log("-- Hoisting --");

// Usar una variables y declararla después
// Sólo se aplica con var y funciones

console.log(x);

var x; // undefined
//let x;   // ReferenceError: Cannot access 'x' before initialization


function demo() {
    console.log(z);
    var z;
}
demo();


console.log(z);
var z = 10;
console.log(z);

var w = 10;
console.log(w);
console.log(w);