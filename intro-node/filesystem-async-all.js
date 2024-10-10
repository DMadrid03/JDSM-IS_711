import {readFile} from 'node:fs/promises'


//importar desde el archivo /stores/users.json
import users from './stores/users.json' with {type: 'json'}

Promise.all([
    readFile('./archivo1.txt','utf-8'),
    readFile('./archivo2.txt','utf-8')
]).then(([result1,result2])=>{
    console.log("Archivo1: ",result1)
    console.log("Archivo2: ",result2)
})

console.log(users[0])
