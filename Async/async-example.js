
// Async, 
// siempre retorna una promesa 
// sin importar el cuerpo del código de la función
// o el valor actual que retorne

async function add(){
    return valor1 + valor2; 
}

async function calcular(){
    // Con async puedo usar dentro de la función await
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 400, 5)
    });
}
