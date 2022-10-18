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
let edades = [20];
function modificador(edades){
    edades[0] = 25;
    console.log("Dentro de la función " + edades);
}
console.log(edades);
modificador(edades);
console.log(edades);


// Funciones puras