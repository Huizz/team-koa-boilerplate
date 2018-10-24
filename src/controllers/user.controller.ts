import { Context } from 'koa';

class UserController {
  public static getUser = (ctx: Context) => {
    const user = ctx.request.query.user
    ctx.status = 200;
    ctx.body = user;
  }
}

export default UserController;
