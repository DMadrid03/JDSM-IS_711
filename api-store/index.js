//importar express
import express, { json } from 'express'
import users from './stores/users.json' with {type: 'json'}


//?equialente al create server de node
const app = express(); //instancia de express 

//puerto
const PORT = process.env.PORT || 3000;


//*rutas
app.get('/', (req,res)=>{
    res.send('Hola desde Express')
})

app.get('/users', (req,res)=>{
    res
        .status(200)
        .json(users) //esta función establece automáticamente los encabezados como json y recibe un json
})

app.get('/users/:id',(req,res)=>{
    const {id} = req.params

    if (isNaN(id)){
        res.status(400)
        res.json({error: true, message:'El id debe ser un valor numerico'})    
    }
    else
    {
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
    }
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
    const {body} = req
    res.json(body)    
})
app.listen(PORT,()=>{
    console.log('Server running on port ' + PORT)
})
