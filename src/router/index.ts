
import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/Home.vue") 
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("@/views/Login.vue")
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import("@/views/Signup.vue")
    }
  ]
})

export default router