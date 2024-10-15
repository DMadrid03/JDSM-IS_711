import users from './stores/users.json' with {type: 'json'}
import http from 'node:http' //importar el modulo http de node
//establecer un puerto de escucha //?usualmente es el puerto 8080

// const PORT = process.env.PORT || 3000
const PORT =  3000


//crear el servidor
const app = http.createServer((request, response) => {
    //TODO:
        //manejo de las peticiones

    const {method,url} = request
    
    switch (method) {
        case 'GET':
            
            switch(url){ //si el url es /users vamos a devolver el contenido del archivo users.json
                case '/users':
                response.setHeader('Content-Type', 'application/json')
                
                // response.end(users)//?pero no se puede devilver solo asi                
                response.end(JSON.stringify(users))
                break
                default:
                    response.end('Soy una petición GET')
            }
            break
        case 'POST':
            console.log('POST')
            break
        default:
            break
    }
    
})

//escuchar al puerto
app.listen(PORT, () => {
    //si se le pasa 0 como puerto se asignará uno automaticamente
    const PORT = app.PORT    
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})