//importar express
import express, { json } from 'express'
import userRouter from './router/user.js';
import { middlewareCors } from './middlewares/cors.js';

//?equialente al create server de node
const app = express(); //instancia de express 

//puerto
const PORT = process.env.PORT || 3000;

//?Rutas
    //*para utilizar las rutas del archivo router/user.js
app.use('/users', userRouter) //!como si fuese un middleware

//*cors
app.use(middlewareCors)

//*middleware para quitar el encabezado de express
app.disable('x-powered-by')
//*Middleware
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

//! manejo de errores
//midleware para manejo de rutas inexistentes
app.use((req,res) =>{
    res.status(404).json({error: true, message: 'URL no encontrado'})
})

app.listen(PORT,()=>{
    console.log('Server running on port ' + PORT)
})

