
let p1 = new Promise((resolve, reject) => setTimeout(resolve, 500, "Hello World"));
//let p1 = new Promise((resolve, reject) => setTimeout(reject, 100, "Error en la 1er promesa"));

let p2 = new Promise((resolve, reject) => setTimeout(resolve, 600, "second Hello World"));

function finalizado(){
    console.log("Todo finalizó");
}

Promise.all([p1,p2]).then(function(resultados){
    console.log(resultados);
    finalizado();
}).catch(err => console.log(err));



/*
p1.then(function(r){
    console.log(r);
    p2.then(function(resultado){
        console.log(resultado);
        finalizado();
    })
})
*/
