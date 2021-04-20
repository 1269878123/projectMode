/**
 * 路由页面配置
 * meta 标签配置
 * @param {String} title 网站标题
 * @param {String} requireAuth 是否需要登录
 *
 **/
const common = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@view/About.vue')
  }
]
export default common
