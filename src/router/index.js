import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/winter',
    name: 'Winter',
    // route level code-splitting
    // this generates a separate chunk (winter.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "winter" */ '../views/Winter.vue')
  },
  {
    path: '/spring',
    name: 'Spring',
    component: () => import('../views/Spring.vue')
  },
  {
    path: '/fertil',
    name: 'Fertilizers',
    component: () => import('../views/Fertilizers.vue')
  },
  {
    path: '/tools',
    name: 'Tools',
    component: () => import('../views/Tools.vue')
  },
  {
    path: '/mechan',
    name: 'Mechanisms',
    component: () => import('../views/Mechanisms.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
