//*Ejemplo 1 uso de map, filter y find con Callbacks
/*//?Descripción:
    Dado un array de objetos que representan estudiantes, queremos:
    • Obtener un array con los nombres de todos los estudiantes (map).
    • Obtener un array con los estudiantes mayores de 20 años (filter).
    • Encontrar el primer estudiante que tenga una calificación mayor a 85 (find).
*/

const estudiantes = [
    { nombre: 'Ana', edad:19,calificacion: 90 },
    { nombre: 'Luis', edad:22,calificacion: 82 },
    { nombre: 'Maria', edad:21,calificacion: 88 },
    { nombre: 'Carlos', edad:18,calificacion: 75 },
]

const nombres = estudiantes.map((estudiante)=>estudiante.nombre)
// console.log(nombres)

const mayores = estudiantes.filter((estudiante)=>estudiante.edad > 20)
// console.log(mayores)

const calificacion = estudiantes.find((estudiante)=>estudiante.calificacion > 85)
// console.log(calificacion)


//*Ejemplo 2: Promesas y Callbacks en Operaciones asíncronas
/* //?Descripción:
    Simularemos una petición a un servidor para obtener datos de usuarios usando
    promesas.*/

function obtenerUsuarios(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const exito = true
            if(exito){
                resolve([
                    {id: 1, nombre: 'Daniel'}
                    ,{id: 2, nombre: 'Luis'},
                ]);
            }
            else{
                reject('Error en la operación')
            }
        }, 1000)
    })
}

// obtenerUsuarios()
//     .then((usuarios)=>{
//         console.log("usuarios:", usuarios);
//         return usuarios.map((usuario)=>usuario.nombre);    
//     })
//     .then((nombres)=>{
//         console.log("nombres de los usuarios:", nombres);
//     })
//     .catch((error)=>{
//         console.error(error);
//     })


//* Ejemplo 3: paso por referencia y modificación de objetos
//?Descripción:
    /*creamos una función que actualiza la propiedad
    de un objeto pasado como argumento*/

function actualizarNombre(persona, nuevoNombre){
    persona.nombre = nuevoNombre;
}

let persona = {
    nombre: 'Daniel'
}
actualizarNombre(persona, 'Miguel')
console.log(persona)