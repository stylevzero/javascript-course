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
console.log("Curso: " + lenguaje.nombre);
console.log("Curso: " + lenguaje["nombre"]);

console.log(lenguaje.print());

lenguaje.nombre = "Js";
lenguaje["nombre"] = "Js";

lenguaje["print"] = function() { console.log("Imprimir web")}

lenguaje.print();