//importar express
import express, { json } from 'express'
import users from './stores/users.json' with {type: 'json'}
import { validatePartialSchema, validateUserSchema } from './schemas/users.schema.js';
import cors from 'cors'
//importar librería para generar llaves
import crypto from 'node:crypto'

//?equialente al create server de node
const app = express(); //instancia de express 

//puerto
const PORT = process.env.PORT || 3000;


app.use(cors({
    origin:(origin, callback)=>{
        const accesosPermitidos = [
            'http://localhost:3000',
            'http://localhost:5500',
            'https://hola.com'
        ]
        if (accesosPermitidos.includes(origin)){
            callback(null, true)
        }
        if (!origin){ //?necesario para que responda a peticiones desde el servidor (como desde postman)
            callback(null, true)
        }
        callback(new Error('No permitido'))        
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
}))

//*rutas
app.get('/', (req,res)=>{
    res.send('Hola desde Express')
})

app.get('/users', (req,res)=>{

    const accesosPermitidos = [
        'http://localhost:3000',
        'http://localhost:5500',
        'https://hola.com'
    ]
    
    const origen = req.get('origin')//solo viene desde fuera del servidor

    if (accesosPermitidos.includes(origen)){
        res.header('Access-Control-Allow-Origin',origen)
    }
    res
        .status(200)
        .json(users) //esta función establece automáticamente los encabezados como json y recibe un json
})

app.get('/users/:id',(req,res)=>{
    const {id} = req.params

    // if (isNaN(id)){
    //     res.status(400)
    //     res.json({error: true, message:'El id debe ser un valor numerico'})    
    // }
    // else
    // {
        const user = users.find(user => user.id == id)
        console.log(user)

        if(user ==undefined){
            res.status(401)
            res.json({error: true, message:'No se encontro el usuario'})
        }
        else{
            res.status(200)
            res.json(user)
        }
    // }
})

//middleware para quitar el encabezado de express
app.disable('x-powered-by')
//Middleware
app.use(json())
// app.use((req,res,next)=>{
//     if(req.method != 'POST') next() //si la petición es diferente de POST, se pasa al siguiente middleware

//     //?si la petición es POST
//     let body = ''
//     req.on('data', (chunk)=>{
//         body += chunk.toString()
//     })//tomar los trocitos, irlos juntando en el body

//     console.log(body)
//     req.on('end', ()=>{
//         req.body = JSON.parse(body)
//     })//reescribir el body

// })

app.post('/users',(req,res)=>{
    //siempre los mismos 4 pasos
    
    const data = req.body

    const id = crypto.randomUUID()
    data.id = id
    //validoar los datos de la petición
   const{success,error} =  validateUserSchema(data)
    
    if(!success){
        res.status(400)
        res.json({error: true, message: error})
        return
    }
    //guardar en la BBDD (simulación)
    users.push(data)
    //responder al cliente
    res
    .json(data)    
    .status(201)//201 ya que se ha creado un recurso en la base de datos
    
})

app.patch('/users/:id', (req,res)=>{
    
    //validar los datos de la petición
    const data = req.body
    const {success, error} = validatePartialSchema(data)
    if(!success){
        res.status(400)
        res.json({error: true, message: error})
        return
    }
    
    const {id} = req.params
    //encontrar el objeto
    const userIndex = users.findIndex(user => user.id === id)

    //hacer referencia al usuario en el arreglo y  asignnando el mismo objeto pero además 
    //reemplazando con los nuevos datos de la petición
    users[userIndex] = {...users[userIndex], ...data} 
        //entonces hay un objeto
        /*
            {
        "name": "Leanne Graham",
        "username": "Bretsld",
        "email": "Sincere@unah.hn",
        "phone": "99502036",
        "website": "https://hola.com",
        "id": "41dac82f-cacd-4719-b309-0a5e142634c9"
        ,email : 'otroSincere@nuevoEmail.hn' //*propiedad repetida
        } //? entonces tiene dos veces la propiedad que se está actualizando y se queda con el segundo valor que es el nuevo

        */
    
    res.json(users[userIndex])
})


app.delete('/users/:id',(req,res)=>{
    const {id} = req.params

    if (id ==undefined)
        res.json({message: 'No se encontro el usuario'})
    
    const userIndex = users.findIndex(user => user.id ===id)
    users.splice(userIndex,1)
    res.json({message: 'Usuario eliminado'})
})

//! manejo de errores
//midleware para manejo de rutas inexistentes
app.use((req,res) =>{
    res.status(404).json({error: true, message: 'URL no encontrado'})
})

app.listen(PORT,()=>{
    console.log('Server running on port ' + PORT)
})
