import http from 'node:http' //importar el modulo http de node
//establecer un puerto de escucha //?usualmente es el puerto 8080

const PORT = process.env.PORT || 3000


//crear el servidor
const app = http.createServer((request, response) => {
    //en función de lo que el cliente solicite, se dará una respuesta
    response.end('Hola Mundooooooo!!!')
})

//escuchar al puerto
app.listen(PORT, () => {
    //si se le pasa 0 como puerto se asignará uno automaticamente
    const PORT = app.PORT
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})