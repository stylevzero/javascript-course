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
