// Javascript Object Notation -> JSON

let lenguaje = {
    nombre: "Javascript",
    tipo: "development",
    stack: ["Frontend", "Backend"],
    print: function() {
        return "Lenguaje Web";
    }
}
 // Asignamos una función a una propiedad del objeto -> Método
console.log("Lenguaje: " + lenguaje.nombre);
console.log("Lenguaje: " + lenguaje["nombre"]);

console.log(lenguaje.print());

lenguaje.nombre = "Js";
lenguaje["nombre"] = "Js";

lenguaje["print"] = function() { console.log("Imprimir web")}

lenguaje.print();

// Shorthand syntax
let nombre = "Javascript";

//let lenguajes = { nombre: nombre};
let lenguajes = { nombre}; 
// Ambos son iguales, con shorthand 
// unicamente agregando el indentificador
// la variable (con el mismo nombre)

nombre = "Go";
console.log(lenguajes.nombre);
console.log(nombre);

lenguajes = {
    nombre,
    //saludar: function(){
    saludar(){        // Shorthand syntax
        return "Hello world";
    }
}

console.log(lenguajes.saludar());

// Duplicar o combinar objetos
let language = {
    name: "Javascript",
    version: 1
}

let newLanguage = {...language, stack: "Backend"};
let levels = { level: 2};

//Combinar objetos con Spread operator
let newObject = {...language, ...levels, name: "Go"};
// Cuando propiedad esta repetida, se mantiene la última

//Combinar objetos con Object assign
//let objectNew = Object.assign({}, language);
//let objectNew = Object.assign(language, {level: 1});
let objectNew = Object.assign(language, levels);

console.log(language);
console.log(newLanguage);
console.log(newObject);
console.log(objectNew);

// Asignacion por desestructuracion
// Destructuring assignment

let languageNew = {
    name: "Javascript",
    stack: "Frontend"
};

let {name} = languageNew;
let {stack} = languageNew;

//let {name: nameLanguage} = languageNew;
let {name: nameLanguage, ...sobrantes} = languageNew;
console.log(name);
console.log(stack);
console.log(nameLanguage);
console.log(sobrantes);

function print({ name }){
    console.log(name);
}
print(languageNew);

let valores = [8,9,10];

//let [ go, js, c] = valores;
let [go, ...otrosLenguajes] = valores;

function obtenerLenguajes(){
    return ["go","javascript", "c#"]
}

let [ backend, ...otrosLenguajesNuevos] = obtenerLenguajes();
console.log(backend);
/*
function suma([v1, v2]) {
    console.log(v1 + v2);
}
*/

console.log(go);
//console.log(js);
//console.log(c);
console.log(otrosLenguajes);
//suma([10, 20]);

// Function Construct

function Lenguaje(title){
    //console.log(this);
    this.name = title;
    this.stack = "Backend";
    this.show = function (){}
}

let objeto = new Lenguaje("Javascript - JS");
let python = new Lenguaje("Python");
console.log(objeto);
console.log(python);
