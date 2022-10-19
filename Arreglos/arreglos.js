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

let cuadrados = [];
for (let x = 0; x <= array.length; x++) {
    cuadrados[x] = numeros[x] * numeros[x];
    
}
console.log(array.length);
console.log(cuadrados);
/*
numeros.map(function(){

})
*/