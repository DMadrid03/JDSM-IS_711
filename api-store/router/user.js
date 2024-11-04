import {Router, json} from  'express'
import { validateUserSchema,validatePartialSchema } from '../schemas/users.schema.js';
import users from '../stores/users.json' with {type: 'json'}
import crypto from 'node:crypto'
import { UserController } from '../controllers/user-controller.js';
const userRouter = Router()


userRouter.use(json())

userRouter.get('/', (req,res)=>{
    res.json(users)
})
userRouter.get('/:id',(req,res)=>{
    const {id} = req.params
    
    if(id === undefined){
        res.status(400)
           .json({error:true, message:"Usuario no encontrado"})
        return
    }

    const user = users.find(user => user.id === id)
    res.status(200)
    .json(user)

})

userRouter.post('/',(req,res)=>{
    
    const data = req.body
    //validar los datos de la petición
    console.log(data)
    const{success,error} =  validateUserSchema(data)
    
    if(!success){
        res.status(400)
        res.json({error: true, message: error})
        return
    }
    //guardar en la BBDD (simulación)
    
    const id = crypto.randomUUID()
    data.id = id
    users.push(data)
    //responder al cliente
    res
    .json(data)    
    .status(201)//201 ya que se ha creado un recurso en la base de datos
    
})


userRouter.patch('/:id', (req,res)=>{
    
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
        /*entonces hay un objeto
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


userRouter.delete('/:id',(req,res)=>{
    const {id} = req.params

    if (id ==undefined)
        res.json({message: 'No se encontro el usuario'})
    
    const userIndex = users.findIndex(user => user.id ===id)
    users.splice(userIndex,1)
    res.json({message: 'Usuario eliminado'})
})


export default userRouter