// import { getCookie } from '@utils'
export const routerBeforeEach = (to, from, next) => {
  let token = window.localStorage.getItem('CXTOKEN') || ''
  document.title = to.meta.title || ''
  if (to.matched.some(record => record.meta.requireAuth) && !token) {
    next({ path: '/login' })
  } else {
    next()
  }
}
