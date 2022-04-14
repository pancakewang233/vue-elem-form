// 用户路由
const Router = require('@koa/router')
const users = require('../data/user')

const router = new Router()

// 视图函数

router.get('/user', async ctx => {
  ctx.body = users
})

router.post('/user', async ctx => {
  // request body
  const body = ctx.request.body
  // 创建用户
  const user = {
    // 主键 id
    id: Math.random(),
    account: body.account,
    password: body.password,
    nickname: body.nickname,
  }

  users.push(user)

  ctx.body = {
    errorCode: 0,
    msg: '创建用户成功',
    request: `${ctx.method} ${ctx.url}`
  }
})

module.exports = router
