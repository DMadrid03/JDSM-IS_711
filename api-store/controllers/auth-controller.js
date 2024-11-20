import connection from "../db/connection.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export class AuthController {


    static authuser(req, res) {


        const { user, password } = req.body

        if (!user || !password) {
            return res.status(400).json({
                error: true,
                message: "Usuario y contraseña son requeridos!"
            })
        }

        const query = `SELECT username, password_hash, must_change_password, status 
                        FROM users WHERE username = ? `

        try {

            connection.query(query, [user], (error, results) => {

                if (error) {
                    return res.status(400).json({
                        error: true,
                        message: "Ocurrió un error al obtener los dato: " + error
                    })
                }

                if (results && results.length === 0) {
                    return res.status(404).json({
                        error: true,
                        message: "Usuario no encontrado"
                    })
                }

                // results, es un array con los resultados de la consulta

                const { password_hash } = results[0] // extraigo el password_hash del primer elemento del array


                bcrypt.compare(password, password_hash, function (err, result) {
                    if (!result) {
                        return res.status(400).json({
                            error: true,
                            message: "Ocurrió un error al comparar las contraseñas"
                        })
                    }
                    
                    //para no devolver el password_hash
                    const data = results[0]
                    
                    delete data['password_hash']
                    //TODO: Validar la consulta en busca de errores

                    const token = jwt.sign({...data},process.env.SECRET_KEY , {expiresIn: '1d'})
                    return res.status(200).json({
                        error: false,
                        message: "Bienvenido",
                        data: data,
                    })

                });


            })

        } catch (error) {
            return res.status(400).json({
                error: true,
                message: "Ocurrió un error al obtener los datos" + error
            })
        }


    }
}