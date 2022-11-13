
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
    },
    {
      path: '/column/:id',
      name: 'column',
      component: () => import("@/views/ColumnDetail/ColumnDetail.vue")
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import("@/views/PostDetail/PostDetail.vue")
    }
  ]
})

export default router