// Para declarar un generador necesitamos definir una función generadora
// Se distingue por su sintaxis que agrega un asterico luego de la palabra reservada function 
// retorna un generador

function* counter(){
    for(var i = 1; i <=5; i++){
        yield i;
    }
    /*
    console.log('Estoy aquí');
    yield 1;
    console.log('Ahora estoy aquí');
    yield 2;
    */
}
let generator = counter();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());