import http from 'node:http' //importar el modulo http de node
//establecer un puerto de escucha //?usualmente es el puerto 8080

const PORT = process.env.PORT || 8080

//crear el servidor
const app = http.createServer((request,response)=>{
    response.end("holaaa")
})

//escuchar el puerto
app.listen(PORT,()=>{
    console.log("Servidor escuchando en el puerto:" +PORT)
})