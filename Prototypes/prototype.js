// Programación orientada a prototipos

// Prototype:
// es un objeto asociado a cualquier función 
// cada función incluyte una propiedad prototype con un objeto que podemos usar
// para compartir código

/*
function Course(){}
//console.log(Course.prototype);
Course.prototype.join = function(){
    console.log("Join course");
}
Course.leave = function(){ 
    console.log("leave course");
}
let course = new Course();

//course.join();  // Console: Join course

//console.log(course);
console.log(course.toString());

*/

function Course(){}

Course.prototype.join = function(){
    console.log("Welcome");
}

/*
let javascript = new Course();
let ruby = new Course();

Course.prototype.join = function(){
    console.log("Welcome 2");
}

Course.prototype.otro = function() {
    console.log("New method");
}

javascript.join();
ruby.join();
*/

Course.prototype.conteo = 0;

let javascript = new Course();
javascript.__proto__.conteo += 1;
let ruby = new Course();
ruby.__proto__.conteo += 1;

//console.log(Course.prototype.conteo);

// Herencia de prototipos

function Language(name){
    this.name = name;
}
Language.prototype.type = function(){
    console.log("Type");
}

function Category(name){
    this.name = name;

}

Category.prototype = Object.create(Language.prototype);

let js = new Category("Backend");
js.type();
console.log(js);
//console.log(js);

/*
let go = Object.create(js);

go.name = "Ejemplo 2";
console.log(go);
*/
//console.log(js);

//console.log(__proto__ === js);

/* 
La herencia de prototipo se da al incluir el prototype de una clase 
en la cadena de prototipos de un objeto.

Un objeto puede heredar de otro cuando se  usa como primer argumento de Object.create

Una función constructora puede heredar de otra si se utilizar
el prototype de la clase base como 1er argumento de object.create y se asigna 
el resultado al prototype de la clase hija
*/