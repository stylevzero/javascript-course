
// Async, 
// siempre retorna una promesa !!
// sin importar el cuerpo del código de la función
// o el valor actual que retornen

// Ejemplo 1
async function add(valor1, valor2){
    // return Promise.resolve(valor1 + valor2); //Internamente hace esto
    return valor1 + valor2; 
}

// Ejemplo 2
async function calcular(){
    // Con async puedo usar dentro de la función await
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 400, 5)
    });
}
