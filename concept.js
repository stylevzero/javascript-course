
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