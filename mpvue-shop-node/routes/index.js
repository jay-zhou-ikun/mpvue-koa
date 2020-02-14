const router = require('koa-router')({
    prefix: '/lm'  //路由前缀
})
// const router = new Router()  //加了路由前缀就不需要new 这个实例了

const controllers = require('../controllers/index')

router.get('/index/index', controllers.home.index)


module.exports = router