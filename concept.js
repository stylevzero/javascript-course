
// variable
let nombre = "stylevzero";

// constante
const height = 170;

console.log(nombre);

let edad = 20;

let cambio = 165;

console.log(edad * cambio);
console.log(Math.PI)

/* 
Tipos

string String ()
number Number()
boolean Boolean()
undefined
symbol Symbol()
null

BigInt()
*/

let number = "Hola"; // inmutable
number = 2;


// type coercion
console.log(10 + "5"); // "105"

console.log("10" == 10); // true
console.log([] == 0); // true
console.log(Number("10")+ 10); // 20
console.log("10" === 10); // true

// Booleanos
// true / false

let notificaciones_activas = false;
let activo = false;

let resultado = Boolean(1);
console.log(resultado); // true

resultado = Boolean(0);
console.log(resultado); // false

resultado = Boolean("false");
console.log(resultado); // true

resultado = Boolean("");
console.log(resultado); // false

resultado = Boolean(false);
console.log(resultado); // false

resultado = Boolean(true);
console.log(resultado); // true

resultado = Boolean("ejemplo");
console.log(resultado); // true

resultado = Boolean(-1);
console.log(resultado); // true

resultado = Boolean(0);
console.log(resultado); // true

/* Son los valores o las expresiones
 o los objetos que evaluan a falso
  cuando se conviertan a booleanos
  cualqueir toro se evalua a verdadero

Nan, null, 0, -0, “”, y false
  */

// Operadores de comparación

// 8 operadores de comparación

/* 
==  Igual
=== Estrictamente igual

!=  Desigual
!== Estrcitamente Desigual

x > y  Mayor que
x < y  Menor que

>= Mayor o igual que
<= Menor o igual que
*/

resultado = 2 < 4;
console.log(resultado); // true

edad = 20;
resultado = edad > 18;
console.log(resultado); // true

edad = 15;
resultado = edad > 18;
console.log(resultado); // false

edad = 15;
resultado = edad == 18;
console.log(resultado); // false

edad = 18;
resultado = edad == 18;
console.log(resultado); // false

edad = 18;
resultado = edad != 18;
console.log(resultado); // false

edad = 13;
resultado = edad != 18;
console.log(resultado); // true

resultado = nombre == "Cody";
console.log(resultado); // false

resultado = nombre != "Cody";
console.log(resultado); // false

edad = "20";
resultado = edad == 20;
console.log(resultado); // true

resultado = edad === 20;
console.log(resultado); // false

resultado = edad != 20;
console.log(resultado); // false

resultado = edad !== 20;
console.log(resultado); // true

// En el estrcitamente, compara tipo y valor


// Operadores lógicos

/* 
&& El operador AND
|| El operador OR
!  El operador de negaciòn o NOT
?? El operador nulli coalescing // fusión de nulos o unión nula

*/

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

/*
edad=28;
console.log(edad > 18 && edad < 30); // true
console.log(edad > 18 && edad < 25); // false
console.log(10 && 0); // Retorna el primer valor falso 0
console.log(10 && 20); // 20
console.log(20 && 10); // 10
console.log(0 && true && false); // 0
console.log(20 && 5 && false); // false
console.log(edad);
*/

console.log(true || true); // true
console.log(true || false); // false
console.log(false || true); // false
console.log(false || false); // false

edad = 20;
console.log(edad > 18 || edad < 30); // true
console.log(edad > 18 || edad < 25);

// Operador negación

console.log(!0); // true
console.log(!1); // false
console.log(!""); // true
console.log(!"prueba"); // false
console.log(! 10 > 15); // true

// Nullish coalescing

// Se utiliza para evaluar si es nullo
// especifcamente, ignora el string vacio, 0

console.log(null ?? "Hola"); // "Hola"
console.log(undefined ?? "Hola"); // "Hola"
console.log("" ?? "Hola"); // ""
console.log(false ?? "Hola"); // false

// Condiciones

// condicion de una sola línea
if(10) console.log("10 es truthy");
if(10)
  console.log("10 es truthy");

// Ejemplo
let calificacion = 9;
if(calificacion == 10){
  console.log("Excelente");
}else if(calificacion > 7){
  console.log("Muy bien");
}else if(calificacion > 5){
  console.log("Puedes mejorar");
}else {
  console.log("Reprobado");
}

// Ciclos

// Ciclo For
// Imprimir números del 1 al 10

/*
1. Instrucción inicial
2. Condición
3. Instrucción después de cada iteracción
*/

// Break termina el ciclo
// Continue lo que hace es saltarse la iteracción

for(let i = 1; i <= 10; i++){
  console.log("Número " + i);
  /*
  if(i == 5){
    break; // Salir del ciclo
  }
  */
  if(i % 2 == 0){ continue;}
  console.log("Es par");

}
console.log("Hola");


// Ciclo While
let i = 1;
while(i <= 10) {
  console.log("Número: " + i);
  i++;
}

// Ciclo Do wile

/*
do{
  console.log();
} while (prompt());
*/

/* undefined, null y NaN */

/* undefined, indica que, 
se le asigna a una variable cuando no tiene valor
cuando nunca se le ha asignado un valor o cuando no ha sido declarada

typeof () Sirve para obtener el tipo que tiene un dato
*/


console.log(typeof ejemplo); // undefined
let name;
console.log(typeof name);    // undefined


/* 

Null hablamos de un objeto especial en javascript que indica la ausencia de valor
a diferencia de undefined que es un tipo de datos, null es un objeto que es asignable;

*/

name=null;
console.log(typeof name); // object

/* 
NaN representa a algo que no es un nùmero
*/

/* 
Si comparamos una cadena con un número obtenemos como resultado NaN
*/

console.log("ejemplo" * 3);

console.log(10/0); //Infinity valor que representa el infinito