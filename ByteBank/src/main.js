import Vue from 'vue'
import App from './App.vue'
import router from './router'
import provedor from './provedor'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import http from '@/http/index'

Vue.config.productionTip = false

//criando a variavel global '$http'
Vue.prototype.$http = http

new Vue({
  router,
  store: provedor,
  render: h => h(App)
}).$mount('#app')
