import * as Router from 'koa-router';
import UserController from '../controllers/user.controller';

const userRouter = new Router();
userRouter.get('/:id', UserController.getUser)
userRouter.get('/', UserController.getUsers)

export default userRouter