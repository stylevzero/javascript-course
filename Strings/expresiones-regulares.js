
//    /hola/

// Literales, especiales (metacaracteres)
// Tipo caracter,
// las aserciones,
// los agrupamientos y rangos, 
// los cuantificadores y los unicode property escapes

// Ejemplo identificar correo electronico

// https://regex101.com/ para testear

// /.@./ -> cualquier cantidad de caracteres @ cualquier caracteres
// /.*@.*/ -> 0 o cualquier cantidad de caracteres @ cualquier cantidad caracteres
// .{1,}@.{1,} / -> 0 o cualquier cantidad de caracteres @ cualquier cantidad caracteres

// Buscar un texto que termine en .com
// .{1,}\.com

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#using_regular_expressions_in_javascript

// Busquedas
// Buscar un patron

let texto = "Hello World this is javascript language 1";

console.log(texto.search(/World/)); // 6
console.log(texto.search(/\d/g));    // 40