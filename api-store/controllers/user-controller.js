import users from '../stores/users.json' with {type:"json"}
import {validateUserSchema, validatePartialSchema} from '../schemas/users.schema.js'
import crypto from 'node:crypto'
import connection from '../db/connection.js'

export class UserController {

    //definir función estática para devolver todos los usuarios
    static getAllUsers(req,res) {
        
        const consulta = 'SELECT * FROM users';

        try{
            connection.query(consulta,(error,results) => {
                if(error){
                    res
                        .status(400)
                        .json({error:true, message: error})
                    return
                }

                console.log(results)
            })
        }
        catch(error){
            if(error){
                res
                    .status(400)
                    .json({error:true, message: error})
                return
            }
        }

        return res
            .header('Content-Type', 'application/json')
            .status(200)
            .json(results)
    }

    static getUserById (req,res){
        const {id} = req.params
        
        if(id === undefined){
            res.status(400)
               .json({error:true, message:"Usuario no encontrado"})
            return
        }
    
        const user = users.find(user => user.id === id)

        if(!user){
            res.status(404)
            .json({error:true, message:"Usuario no encontrado"})
            return
        }
        res.status(200)
        .json(user)
    }


    static createUser(req,res){
    
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
        
    }

    static updateUser(req,res){
    
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
        if(userIndex === -1){
            res.status(404)
            res.json({error: true, message: "Usuario no encontrado"})
            return
        }
        //hacer referencia al usuario en el arreglo y  asignnando el mismo objeto pero además 
        //reemplazando con los nuevos datos de la petición
        users[userIndex] = {...users[userIndex], ...data}                     
        res.json(users[userIndex])
    }

    static deleteUser(req,res){
        const {id} = req.params
    
        if (id ==undefined)
            res.json({message: 'No se encontro el usuario'})
        
        const userIndex = users.findIndex(user => user.id ===id)
        if(userIndex === -1){
            res.json({message: 'No se encontro el usuario'})
            return
        }
        users.splice(userIndex,1)
        res.json({message: 'Usuario eliminado'})
    }
}

