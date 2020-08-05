import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import fund from '../views/WS6.vue'
import WS7 from '../views/WS7.vue'
import WS8 from '../views/WS8.vue'
import WS9 from '../views/WS9.vue'
import WS10 from '../views/WS10.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/WorkShop3-5',
    name: 'fee',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/WS3_5.vue')
  },
  {
    path: '/WorkShop6',
    name: 'fund',
    component: fund
  },
  {
    path: '/WorkShop7',
    name: 'WS7',
    component: WS7
  },
  {
    path: '/WorkShop8',
    name: 'WS8',
    component: WS8
  },
  {
    path: '/WorkShop9',
    name: 'WS9',
    component: WS9
  },
  {
    path: '/WorkShop10',
    name: 'WS10',
    component: WS10
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
