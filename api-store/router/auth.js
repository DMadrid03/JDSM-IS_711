import {Router, json} from  'express'
import {AuthController} from '../controllers/auth-controller.js'

const authRouter = Router();

//por qu

authRouter.use(json())
authRouter.post('/', (req, res) => {
    console.log("petición enrutada por authRouter")
    console.log(req.body)
    AuthController.authuser(req, res)
}) 

export default authRouter