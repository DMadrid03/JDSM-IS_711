
//promesas y funciones en js


/**
 * Simula una tarea asíncrona que puede tener éxito o fallar.
 * Devuelve una promesa que se resuelve o rechaza después de 2 segundos.
 * @return {Promise<string>} Promesa que se resuelve con un mensaje de éxito o se rechaza con un mensaje de error.
 */
function tareaAsincrona(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const exito = true;

            if(exito){
                resolve("Operación exitosa");
            }
            else{
                reject("Error en la operación");
            }
        }, 2000);
    });
}

tareaAsincrona()
    .then((data)=>{
        // console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    });



async function obtenerUsuarios(){
    try{
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!respuesta.ok){
            throw new Error('Error en la respuesta');
        }
        const usuarios = await respuesta.json();
        console.log("Usuarios obtenidos: ", usuarios);
    }
    catch(error){
        console.error("Error: ", error);
    }
}
// obtenerUsuarios()


function despedida(){
    console.log("Adios Daniel");
}

function procesarEntrada(nombre, callback){
    console.log("Hola " + nombre);
    callback();
}

/*function procesarEntrada(nombre, callback){
    console.log("Hola " + nombre);
    callback();
}*/

// procesarEntrada("Daniel", despedida);

