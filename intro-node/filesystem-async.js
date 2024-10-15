import {readFile} from 'node:fs/promises'

//?ahora readFile es asíncrona

console.log("Comenzando lectura de archivos...")

const resultArchivo1 = await readFile('./archivo1.txt','utf-8')
console.log("Terminando lectura del primer archivo")
console.log("resultado de archivo1: ", resultArchivo1)

console.log("Comenzando lectura del segundo archivo")
const resultArchivo2 = await readFile('./archivo2.txt','utf-8')
console.log("Terminando lectura del segundo archivo")
console.log("Resultado de archivo2: ", resultArchivo2)

const resultTodo = await Promise.all([
    readFile('./archivo1.txt','utf-8'),
    readFile('./archivo2.txt','utf-8')
]).then(([result1,result2])=>{
    console.log("Archivo1: ",result1)
    console.log("Archivo2: ",result2)
}).catch((err)=>{
    console.error(err)
})