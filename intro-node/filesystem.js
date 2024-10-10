
import {readFile} from 'node:fs' //fs: filesystem

console.log("Comenzando lectura de archivos...")
readFile('./archivo1.txt','utf-8',(err,data)=>{
    if(err){
        console.log("Ocurrió un error ",err)
        return
    }
    console.log(data)
})

console.log("Después de la finalizacion de la lectura del primer archivo")

console.log("Iniciando lectura del archivo no.2")
readFile('./archivo2.txt','utf-8',(err,data)=>{
    if(err){
        console.log("Ocurrió un error ",err)
        return
    }
    console.log("Contenido del segundo archivo: ",data)
})

console.log("Despues de la lectura del segundo Archivo")