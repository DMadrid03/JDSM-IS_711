import users from '../stores/users.json' with {type:"json"}
import {validateUserSchema,validateUserSchemaDB, validatePartialSchema} from '../schemas/users.schema.js'

import crypto from 'node:crypto'
import connection from '../db/connection.js'
import bcrypt from 'bcrypt'
export class UserController {


    //definir función estática para devolver todos los usuarios
    static getAllUsers(req,res) {
        
        const consulta = 'SELECT * FROM user';

        try{
            connection.query(consulta,(error,results) => {
                if(error){
                    res
                        .status(400)
                        .json({error:true, message: error})
                    return
                }

                console.log(results)
                return res
                // .header('Content-Type', 'application/json')
                .status(200)
                .json(results)
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

        
    }

    static getUserById(req, res) {
        const { id:user_id } = req.params
    
        // const user = users.find(user => user.id == id)

        const consulta = `SELECT user_id, username, password_hash, email, full_name, role,
	                    must_change_password, STATUS, created_at, updated_at 
                        FROM user
                        WHERE user_id = ? `;

        try {
            
            connection.query(consulta, user_id, (error, results) => {

                if (error) {
                    return res.status(400).json({
                        error: true,
                        message: "Ocurrió un error al obtener los dato: " + error
                    })
                }

                if (results && results.length === 0) {
                    res
                        .json({
                            message: "Usuario no encontrado"
                        })
                }

                return res
                    // .header('Content-Type', 'application/json')
                    .status(200)
                    .json(results)

            })

        } catch (error) {
            return res.status(400).json({
                error: true,
                message: "Ocurrió un error al obtener los datos"
            })

        }

    }


    static createUser(req, res) {


        const query = `INSERT INTO user (username, password_hash, email, full_name, role, must_change_password, status) 
                        VALUES ( ?, ?, ?, ?, ?, ?, ? ) `

        // const query = `INSERT INTO user (username, password_hash, email, full_name, role, must_change_password, status) 
        //                 VALUES (:username, :password_hash, :email, :full_name, :role, :must_change_password, :status) `

        const data = req.body
        const { success, error } = validateUserSchemaDB(data)

        if (!success) {
            res.status(400).json({
                message: JSON.parse(error.message)
            })
        }

        try {

            const { username, password_hash, email, full_name, role, must_change_password, status } = data

            //crea el hash de la contraseña
            const password = bcrypt.hashSync(password_hash, 10)

            connection.query(query, [username, password, email, full_name, role, must_change_password, status], (error, results) => {
                if (error) {
                    return res.status(400).json({
                        error: true,
                        message: "Ocurrió un error al obtener los datos: " + error
                    })
                }
                return res
                    .header('Content-Type', 'application/json')
                    .status(201)
                    .json(data)
            })
        } catch (error) {
            res.status(400).json({
                error: true,
                message: "Ocurrió un error al obtener los datos, catch" + error
            })
        }
    }

    static updateUser(req, res) {

        const data = req.body
        const { success, error } = validatePartialSchema(data)

        if (!success) {
            res.status(400).json({
                message: JSON.parse(error.message)
            })
        }

        const { id } = req.params

        const userIndex = users.findIndex(user => user.id === id)

        // hago referncia al usuario en el arreglo
        // asignado el mismo objeto, pero ademas, reemplazando con los nuevos datos de la petición
        if (userIndex === -1) {
            res.status(404).json({
                message: "Usuario no encontrado"
            })
        }

        //TODO: actualizar en la BBDD
        users[userIndex] = { ...users[userIndex], ...data } //simulación

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

