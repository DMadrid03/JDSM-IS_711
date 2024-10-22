
let postres = [
    {
        nombre: 'chocoflan',
        calorias: 499,
    },
    {
        nombre: 'Galletas',
        calorias: 1500
    }
]

const postresLigeros = postres.filter(({calorias})=> calorias > 500)
console.log(postresLigeros)

postres.push({
    nombre: 'chesecake',
    calorias: -2000})

postres.push({
    nombre: 'helado',
    calorias: 1000
})
console.log(postres)

// repaso de map, sin modificar un arreglo original
const postresfiltrados_map = postres.map((postre)=> postre.calorias > 500)
console.log(postresfiltrados_map)


//una promesa que falle si hay una caloría negativa
const promesa= new Promise((resolve, reject)=>{
    
    const condicion = postres.some(({calorias})=> calorias < 0)
    if (condicion){
        reject("hay postres con calorías negativas")
    }        
    resolve("no hay postres con calorías negativas, todo bién")
})

//utilizar esa promesa
promesa
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err))