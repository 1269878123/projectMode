import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@static/styles/reset.css'

Vue.config.productionTip = false
console.log(process.env.VUE_APP_defaultApi, 211111)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
