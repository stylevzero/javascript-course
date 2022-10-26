// Clases

/* 
En javascript las clases no existen
javascript es un lneguarento orientado a objetos pero basado en prototipos
*/

// class declaration
class Demo{

}

// class expression
/*
let Demo = class {

}
*/

// Class declaration es más utilizada
class Course {
    constructor(title){
        this.title=title;
    }
    join(){
        console.log("joined");
    }
}

// Creamos objeto a partir de una clase, usando el operador new

// instanciar, instancia de la clase
let javascript = new Course("Course of Javascript");

console.log(javascript.title);
javascript.join();

// Definir métodos y propiedades

class CourseWeb {
    title = "Backend Javascript";
    join(){
        this.title = title;
    }

    // método con function
    /*
    join = function(name){
        this.name=name;
    }
    */

    // método con arrow functions
    //join = (name)=> this.name = name;

}

let j = new CourseWeb();
console.log(j.title);

// Alcance de las propiedades

/* Para utlizar esta nueva sintaxis que nos permite definir 
métodos y porpiedades privadas, debemos agregar el simbolo # antes
del campo o nombre de la propiedad */
class CourseBackend{
    // Pueden unicamente ser utilizado dentro del cuerpo de una clase
    #title = "Javascript";
    constructor(){
        this.#welcomeNew();
    }
    welcome(){
        console.log("Bienvenido al curso: " + this.#title);
    }
    #welcomeNew(){
        console.log("Bienvenido al curso new: " + this.#title);
    }
    

    
}

let js = new CourseBackend();
//console.log(js.#title); // SyntaxError: Private field '#title' must be declared in an enclosing class
js.welcome();
//js.#welcomeNew(); //SyntaxError: Private field '#welcomeNew' must be declared in an enclosing class