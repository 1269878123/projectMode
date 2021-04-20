import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers' // 引进路由

Vue.use(VueRouter)

// 注入拦截
router.beforeEach(routerBeforeEach)
// 解决重复点击按钮router.push报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 解决重复点击按钮router.replace报错
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
