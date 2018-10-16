import Vue from 'vue'
import Router from 'vue-router'
import Rutas from './views/Rutas.vue'
import NuestrosMomentos from './views/NuestrosMomentos.vue'
import NuestrasCanciones from './views/NuestrasCanciones.vue'
import MisDedicatorias from './views/MisDedicatorias.vue'
import MeInspiras from './views/MeInspiras.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/rutas',
      name: 'rutas',
      component: Rutas
    },
    {
      path: '/nuestros-momentos',
      name: 'nuestros-momentos',
      component: NuestrosMomentos
    },
    {
      path: '/nuestras-canciones',
      name: 'nuestras-canciones',
      component: NuestrasCanciones
    },
    {
      path: '/mis-dedicatorias',
      name: 'mis-dedicatorias',
      component: MisDedicatorias
    },
    {
      path: '/me-inspiras',
      name: 'me-inspiras',
      component: MeInspiras
    }
  ]
})
