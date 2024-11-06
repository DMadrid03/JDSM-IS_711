import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost', //o bien la ip del proveedor externo de base de datos
    port: 3306, //puerto de la base de datos, por defecto es 3306 //*si se cambia especificarlo, sino es opcional
    user: 'root', //nombre de usuario de la base de datos de xampp
    password: '',
    database: 'store'
 }) //contraseña de la base de datos de xampp


 connection.connect((error)=>{
    if(error){
        throw new Error("El error de conexión es: " + error)
    }
 })

 export default connection