import Vue from 'vue'
import VueRouter from 'vue-router'
import Gerentes from '../views/Gerentes.vue'
import Home from '../views/Home.vue'
import NovoUsuario from '../views/NovoUsuario'
import Login from '../views/Login'
import provedor from '@/provedor'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes
  },
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
    component: NovoUsuario,
    meta: {
      publica: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      publica: true
    }
  }
]


const router = new VueRouter({
  routes
})

router.beforeEach((routeTo, routeFrom, next) => {
  if (!routeTo.meta.publica && !provedor.state.token) {
    return next({ path: '/login' })
  }
  next()
})


export default router
