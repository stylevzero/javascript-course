
// El principal uso que le damos a un simbolo es el de claves para propiedades de un objeto

let simbolo = Symbol('mi-simbolo');
//let simbolo2 = Symbol('mi-simbolo');

let obj = {}

obj[simbolo] = function(){
    console.log("Esto es un símbolo");
}
//console.log(simbolo == simbolo2);

obj[simbolo]();