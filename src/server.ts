import * as Koa from 'koa';
import * as Logger from 'koa-logger';
import * as Cors from '@koa/cors';
import * as BodyParser from 'koa-bodyparser';
// const BodyParser = require('koa-bodyparser')
import * as Helmet from 'koa-helmet';
import router from './routes';

const app = new Koa()
// const router = new Router()

app.use(Helmet())

if (process.env.NODE_ENV === 'development') {
  app.use(Logger())
}

app.use(Cors())
app.use(BodyParser({
  enableTypes: ['json'],
  jsonLimit: '5mb',
  strict: true,
  onerror: function (err, ctx) {
    ctx.throw('body parse error', 422)
  }
}))

// API routes
// require('./routes')(router)
app.use(router.routes())
app.use(router.allowedMethods())

module.exports = app
