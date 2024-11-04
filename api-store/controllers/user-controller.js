
export class UserController {

    //definir función estática para devolver todos los usuarios
    static getAllUsers() {
        res
            .header('Content-Type', 'application/json')
            .status(200)
            .json(users)
    }

    static getUserById(id) {        
        const user = users.find(user => user.id == id)
        if(user ==undefined){
            res.status(401)
            res.json({error: true, message:'No se encontro el usuario'})
        }
        else{
            res.status(200)
            res.json(user)
        }
    // }
    }
}