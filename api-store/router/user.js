import {Router, json} from  'express'
import { UserController } from '../controllers/user-controller.js';
const userRouter = Router()


userRouter.use(json())

userRouter.get('/', UserController.getAllUsers)
userRouter.get('/:id',UserController.getUserById)
userRouter.post('/',UserController.createUser)
userRouter.patch('/:id', UserController.updateUser)
userRouter.delete('/:id',UserController.deleteUser)


export default userRouter