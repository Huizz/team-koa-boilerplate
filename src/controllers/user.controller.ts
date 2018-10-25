import { Context } from 'koa';
import { getUser, getUsers } from '../model/user.model';

class UserController {
  public static getUser = async (ctx: Context) => {
    const user = await getUser(ctx.params.id)
      .catch((error) => {
        ctx.throw(500, error.message) // @TODO: this message is not being exposed to user
      });
    ctx.status = 200;
    ctx.body = user;
  }

  public static getUsers = async (ctx: Context) => {
    const users = await getUsers();
    ctx.status = 200;
    ctx.body = users;
  }
}

export default UserController;
