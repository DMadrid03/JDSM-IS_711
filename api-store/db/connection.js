import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const connection = mysql.createConnection({
    host: process.env.DB_HOST, //o bien la ip del proveedor externo de base de datos
    port: process.env.DB_PORT, //puerto de la base de datos, por defecto es 3306 //*si se cambia especificarlo, sino es opcional
    user: process.env.DB_USER ,//|| "root", //nombre de usuario de la base de datos de xampp
    database: process.env.DB_NAME ,//|| "disenio"
 }) //contraseña de la base de datos de xampp

 connection.connect((error)=>{    
    if(error){
        throw new Error("El error de conexión es: " + error)
    }
 })

 export default connection