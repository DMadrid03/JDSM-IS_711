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

app.listen(PORT,()=>{
    console.log('Server running on port ' + PORT)
})
