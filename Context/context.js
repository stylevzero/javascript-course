
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

setTimeout(student.greeting, 100);  // Hola soy undefined