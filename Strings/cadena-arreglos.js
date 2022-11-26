let texto = "Javascript es un lenguaje";

// Split
let palabras = texto.split(" ")
console.log(palabras.length);

// Join
let textoUnido = palabras.join(",");
console.log(textoUnido);

// Filtro
console.log(filtroDeMarcas(texto));

function filtroDeMarcas(str){
    let marcas = ["lenguaje"];
    let palabrasFiltradas = str.split(" ").map(
        palabra => {
            return marcas.includes(palabra) ? "ZZZ" : palabra
        }
    )
    //console.log(palabrasFiltradas);
    return palabrasFiltradas.join(" ");
};
