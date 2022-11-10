// Encadenar promesas

function primerPromesa() {
    return new Promise((resolve, reject) => setTimeout(resolve, 500, "Mensaje de la 1er promesa"));
}

function segundaPromesa(r2){
    console.log(r2);
    return new Promise((resolve, reject) => setTimeout(resolve, 600, "mensaje de la segunda promesa"));
}

function promesaTerminada(){
    console.log("Todo finalizó");
}

primerPromesa().then(segundaPromesa).then(function(r){ console.log(r)})