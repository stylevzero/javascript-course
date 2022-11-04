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


// Método constructor

/* 
Se puede definir un método especial al que llamamos el método constructor
que se diferencia del resto de los métodos, este método se ejecuta de manera automática
cuando instancia un nuevo objeto de una clase
*/

class CourseFrontend{
    constructor(titulo, color="yellow"){
        this.titulo = titulo;
        this.color = color;
        console.log(arguments);
    }
}
new CourseFrontend("Course of frontend javascript", 1,2,3,4,5);

// Herencia de clases

//Extiende a través de la palabra extends
class Person{
    name = "prueba";
    run() {
        console.log("Go");
    }

}
class Admin extends Person{}
let admin = new Admin();
admin.run();

/*
class Player {
    play() { 
        this.video.play
    }
    duration() {
        return this.video.duration /100;
     }
}

class Vimeo extends Player {
    open() {
        this.redirectToVimeo(this.video)
    }
}

class YouTube extends Player {
    open(){
        this.redirectToYoutube(this.video)
    }
}
let vimeo = new Vimeo();
vimeo.play();
vimeo.duration();
vimeo.open();
*/

/* Herencia de objeto del lenguaje */
class CustomDate extends Date{}
class CustomArray extends Array{}

/*
function User() {}
class Admin extends User{

}
*/

// Sobre escribir la funcionalidad que estamos heredando
class User {
    constructor(name){
        this.name = name;
    }
    greeting(){
        console.log("Hello user");
    }
}

class SuperAdmin extends User{
    constructor(name) {
        super(name);
    }
    greeting(){
        super.greeting();
        console.info("Hello i am Admin");
    }
}

let superadmin = new SuperAdmin("Administrator");
console.log(superadmin);
//superadmin.greeting();


// Methods accessor (Encapsulación)


class MyUser{
    get name() {
        return this._name.charAt(0).toUpperCase() + this._name.slice(1);
        //return this._name;
        //return "My name"; 
    }
    set name(name) {
        if (typeof name !== "string") throw new Error("No es una cadena");
        this._name = name;
        //console.log(name); 
    }
}

/*
class MyUser{
    constructor (name){this.name = name}
}
*/
let myuser = new MyUser("nombre de ejemplo");
//console.log(myuser.name); // get

//myuser.name             // getter
myuser.name = "prueba";   // setter

console.log(myuser.name); // getter