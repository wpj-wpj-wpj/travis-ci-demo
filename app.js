const Koa = require('koa')

const app = new Koa()

app.use(async ctx => {
  ctx.body = 'Hello World!Change'
})

app.listen(3000, () => console.log('Server is running at 3000...'))
