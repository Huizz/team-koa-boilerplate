import { Context } from 'koa';
import { getUser, getUsers } from './user.model';

// sample user/10/assets/3 ->  actually should we be rethinking this routing instead
// say if user tries to access asset/3, then should there be a permission check on the route
// so the granuality only goes down to /user/10/assets
// permission can be checked with header.
// front-end can be user/10/assets/3, the front-end app should be calling the api asset/3 with a permission check performed at the endpoint with uid = 10
// user 10's asset 3
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
