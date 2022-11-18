import fetch from 'node-fetch';

(async function() {
    try{
        let promesa = await Promise.reject("error");
        let promesa2 = await Promise.reject("error");
    } catch(err){
        console.log(err);
    }
})()

/*
let promesa = fetch("https://api.github.com//users/stylevzero/repos"); 

promesa.then(() => { // Exito }).catch((err)=>{console.log(err)});
*/