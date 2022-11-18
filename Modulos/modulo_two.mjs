// Es una practidad recomendada que los archivos que definen un módulo de javascript
// utilicen la extensión .mjs

// Un módulo de javascript se diferencia de un archivo de javascript tradicional
// o bien exporta o bien lo importa, ambos archivos son considerados mòdulos

export const name = "stylecss";

export let edad = 25;

edad = 26;

// Un mismo módulo puede exportar múltiples valores por nombre
// pero sólo puede exportar uno por default
let valorPorDefecto = 20;

export default valorPorDefecto;