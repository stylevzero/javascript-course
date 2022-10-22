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