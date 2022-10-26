
// Contexto -> this

console.log(this); // Objeto global window

// Cuando estamos dentro del alcance global, el valor de this
// es = al objeto global

/*
function demo(){
    console.log(this);
}
*/

/*
demo(); // demo(), es igual a window.demo

let objeto = {
    demo: function() {
        console.log(this);
    }
}

objeto.demo(); // El valor del contexto, es el objeto que ejecuta la función
*/

/*
¿Qué valor adopta el contexto?
Depende de donde se ejecuta la función y no de donde se declara
*/

/*
let objeto = {
    func: demo

}
objeto.func();
*/

let objeto = {
    func: function(){
        console.log(this);
    }
}
/*
let f = objeto.func;
f();
*/
/*
function exec(f){
    f();
}
exec(objeto.func);
*/

let segundoObjeto = {
    func: null,
    exec: function(f){
        this.func = f;
        this.func();
    }
}

segundoObjeto.exec(objeto.func);

let student = {
    name: "Student 1",
    greeting: function(){
        console.log("Hola soy " + this.name);
    }
}

//student.greeting(); // Hola soy student 1
let f = student.greeting;
f();    // Hola soy undefined

//setTimeout(student.greeting, 100);  // Hola soy undefined

// Arrow functions

// Si la funcion es de una sola línea, se pueden omitir las llaves
/* Normal
let demo = () => {
    console.log("Hello World!");
}
*/
let demo = ()=> console.log("Hello World!"); // Una sola línea
demo();

let hello = () => {
    console.log("Hello arrow functions");
}
let suma = (a,b)=> a+b; //Al no tener llave se genera un retorno implicito
console.log(suma(2,3));

// Contexto
/* 
Poseen una sintaxis mas corta que la declaración de función
Heredan el valor de this del contexto en el que fueron creadas
y no se reasigna
*/

let programmer = {
    name: "javascript programmer",
    greeting: ()=> {console.log("Hello i am " + this.name);},        
    greetingAlt: function(){console.log("Hello i am " + this.name);}

}
programmer.greeting();      // Contexto al momento de ser definido (en este punto de la ejecución es el objeto window)
programmer.greetingAlt();   // Contexto del objeto (programmer) que ejecuta la funcion

function programmerWeb() {
    this.name = "javascript programmer";
    this.greeting = ()=> console.log("Hello i am " + this.name);
}

let e = new programmerWeb();
e.greeting();