import connection from "../db/connection.js";
import bcrypt from 'bcrypt'

export class AuthController {


    static authuser(req, res) {      
        console.log(req.body)  
        const {user, password} = req.body

        if(!user || !password) {
            return res.status(400).json({
                message: "El usuario y la contraseña son requeridos"
            })
        }

        const query = 'Select username,password_hash, must_change_password, status from user where username = ?'

        
            try {
                connection.query(query, [user], (error, results) => {
                    if (error) {
                        return res.status(400).json({
                            error: true,
                            message: "Ocurrio un error al hacer el query y obtener los datos: " + error
                        })
                    }

                    //results es un array de los resultados del query
                    const {password_hash} = results[0]
                    bcrypt.compare(password, password_hash, (error, result) => {
                        if (error) {
                            return res.status(400).json({
                                error: true,
                                message: "Ocurrio un error al obtener los datos: " + error
                            })
                        }
                       
                            return res.status(200).json({
                                error: false,
                                message: "Bienvenido"
                            })
                        
                    })

                });
            } catch (error) {
                throw new Error(error)
            }
    }
}