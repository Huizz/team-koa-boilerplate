import { Context } from 'koa';
class Controller {
    public static getHealth = (ctx: Context) => {
        ctx.status = 200;
        ctx.body = 'API endpoint is running';
    }
}
export default Controller
