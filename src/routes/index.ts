import * as Router from 'koa-router';
import userRouter from './user.routes';
// import Controller from '../controllers';

const router = new Router();

router.prefix('/v0');
// router.get('/health', Controller)

// user specific routes. path defined as /v1/user/
router.use('/user', userRouter.routes(), userRouter.allowedMethods())

export default router;
