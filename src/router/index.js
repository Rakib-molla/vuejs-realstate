import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
  
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
  },
  {
    path: '/contactus',
    name: 'Contact',
  
    component: () => import(/* webpackChunkName: "Contact" */ '../views/Contactus.vue')
  },
  {
    path: '/about',
    name: 'Aboutsection',
  
    component: () => import(/* webpackChunkName: "Aboutsection" */ '../views/About.vue')
  },
  {
    path: '/project',
    name: 'Project',
  
    component: () => import(/* webpackChunkName: "Projectsection" */ '../views/Project.vue')
  },
  {
    path: '/carrer',
    name: 'Carrer',
  
    component: () => import(/* webpackChunkName: "Carrer" */ '../views/Carrer.vue')
  },
  {
    path: '/pricing',
    name: 'Pricing',
  
    component: () => import(/* webpackChunkName: "Pricing" */ '../views/Pricing.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
