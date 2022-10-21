console.log("--  Arreglos --");

let calificacion = [10,9,8,7,9];

/* 
Las posiciones de los elementos comienzan a contar desde cero, el 1er elemento tiene como index 0
La última posición es igual a la longitud del arreglo menos uno
*/

let arreglo = ["rails", "laravel", "django", 1, {}, function(){}, [1,2,3]];
//arreglo[0] = "Javascript";  // Reasignar valor

let resultado = arreglo.push(3);    // Agrega al final un elemento
arreglo.unshift(3);                 // Agrego al principio un elemento

let eliminado = arreglo.pop();      // Elimina el último elemento
//let eliminado = arreglo.shift()     // Elimina el 1er elemento

console.log(arreglo);
console.log(eliminado);         // Imprime el elemento eliminado
console.log(resultado);         // Imprime la nueva longitud del arreglo
//console.log(arreglo[0]);      // Imprimos la posición 0

console.log("--  Recorrer arreglos --");

let array = [1,2,3,4];
for (let i = 0; i < array.length; i++) {
    let elemento = array[i];
    console.log(elemento);
}

for (let i = array.length -1 ; i >=0; i--) {
    console.log(
        array[i]
    );
}

// forEach

let lenguajes = ["ruby", "php", "javascript", "python"]

/*
lenguajes.forEach(function(lenguaje, indice, lenguaje){
    console.log(lenguaje, indice, lenguajes);
})
*/

lenguajes.forEach(function(lenguaje, indice, lenguaje){
    console.log(this); // 1er argumento toda la función
}, "hola") // 2do argumento se asigna como valor a this

/* Map */
// Generar un nuevo arreglo, luego de ejecutar una función de modificación 
// para cada uno de los elementos del arreglo original

let numeros = [2,3,5,1,34];

/*
let cuadrados = [];
for (let x = 0; x <= array.length; x++) {
    cuadrados[x] = numeros[x] * numeros[x];
    
}
*/

let cuadrados = numeros.map(function(numero, indice){
    return numero * numero;
})

console.log(array.length);
console.log(cuadrados);

let numerosNuevos = ["10", "5", "4", "3"];

numeros = numeros.map(function(numString){
    return parseInt(numString); // Tenemos string  y los convertimos a enteros
})
console.log(numerosNuevos);
console.log(numeros);

// Filter

let numbers = [8,3,4,10,5,3];

// Obtener los valores pares

let nuevoArray = numbers.filter(function(number){
    return number % 2 === 0; // Se conservan los elementos que la funcion retorna true
    /*
    if(number % 2 === 0) {
        return true;    // Se conservan los elementos que la funcion retorna true
    }        
    */
});

// Obtener los valores impares
/*
let nuevoArray = numbers.filter(function(number){
    return number % 2; // Se conservan los elementos que la funcion retorna true
});
*/
console.log(nuevoArray);


lenguajes = ["ruby", "php", "javascript", "html", "python", "kotlin"]

let nuevoArreglo = lenguajes.filter(function(lenguaje){
    return lenguaje != "ruby";
});

/* 
let nuevoArreglo = lenguajes.filter(function(lenguaje,indice,arreglo){
    return lenguaje != "ruby";
}, {});
*/
console.log(nuevoArreglo);

// Reduce

/* Reducir un arreglo a un solo elemento con reduce */

let arregloDeNumeros = [1,2,3,4,5];
let suma = arregloDeNumeros.reduce(function(acumulador, elemento){
//console.log(acumulador);
//return 1;
return acumulador + elemento;
}, 0); // El 2do arg es el valor inicial para el acumulador
console.log(suma); //15


let nombres = ["stylevzero", "Desarrollo Web"];

let html = nombres.reduce(function(acc, elem){
    return acc + "<li>" + elem + "</li>";
}, "");
console.log(html);

// Buscar un elemento en un array

let framework = ["angular", "react", "vue", "ember", "svelte"];

//indexOf   -> === --> posicion
//includes  -> === --> true|false
//find      -> función prueba -> elemento encontrado
//findIndex -> función prueba -> posicion
//some      -> función prueba -> true|false

//console.log(framework.indexOf("react")); // 1 (posicion 1)
console.log(framework.indexOf("reacts")); // -1 No lo encuentra

//includes (indica sólo si existe, no indica posición)
console.log(framework.includes("react"))     // true
console.log(framework.includes("knockout", 1))  // false, 2do arg indica desde que elemento empieza a buscar

//find
let respuesta = framework.find(function(el,posicion,arreglo){
    return el === "react";
});
console.log(respuesta)

//findIndex
let resp = framework.findIndex(function(el,posicion,arreglo){
    return el === "react";
});
console.log(resp) // Retorna la posicion donde la encontro

//some
let response = framework.some(function(el,posicion,arreglo){
    return el === "react";
});
console.log(response) // Al encontrarlo retorna true

// Spread y rest sintax

// Iterable
// Spread syntax (...) (expande los elementos)

let arr = [1,2,3];
let nombre = "stylevzero";

console.log(arr);           // 1,2,3
console.log(...arr);        // 1
                            // 2
                            // 3
                            
console.log(nombre);
console.log(...nombre); // Imprime cada elemento que compone el iterable

// Rest parameter (Inversa del spread)
//                  Nos permite agrupar elementos

function demo(...arreglonew){
    console.log(arreglonew);
}
demo(10,2);

function promedio(nombre, ...calificaciones){
    console.log(arguments);
    console.log(nombre, calificaciones);
}
promedio("stylevzero", 5,6,7,9,6);



