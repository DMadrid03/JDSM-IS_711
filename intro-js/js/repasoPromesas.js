

//!Repaso de promesas

const miPromesa = ()=>{
    return new Promise((resolve, reject)=>{ //?El constructor de promise recibe referencia de dos funciones
        //al momento que resuelva 
        // resolve("Lo que sea que le pase al resolver")

        reject("Algo salió mal allí")
    })
}

//?Dos formas de manejarlo, síncrona y asíncrona
function success(r){
    console.log(r)
}

/*
//si no tuviesemos el .catch, se nos crasheara el api, por que sería un uncaught exception
miPromesa().then(success).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("bloque finally")
})
*/

//de forma síncrona //*Con async y await
async function name(params) {
    
}