
import { createRouter, createWebHistory } from 'vue-router'

import store from '@/store'
import http from '@/utils/http'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import("@/views/Home.vue") 
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("@/views/Login.vue"),
      meta: { redirectAlreadyLogin: true } // 已经登录,直接跳转到首页
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import("@/views/Signup.vue"),
      meta: { redirectAlreadyLogin: true }
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
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import("@/views/UserDetail.vue"),
      // meta: { requiredLogin: true }
    },
    {
      path: '/create',
      name: 'create',
      component: () => import("@/views/CreatePost.vue"),
      // meta: { requiredLogin: true }
    }
  ]
})


router.beforeEach((to, from, next) => {
  const { user, token } = store.state
  const { requiredLogin, redirectAlreadyLogin } = to.meta

  if (!user.isLogin) { // 未登录
    if (token) { // 有token
        http.defaults.headers.common.Authorization = `Bearer ${token}`
        //获取当前用户

        store
          .dispatch('fetchCurrentUser')
          .then((res) => {
            if (res.code) {
              if (redirectAlreadyLogin) {
                next("/");
              } else {
                next();
              }
            } else {
              store.commit("logout");
              next("/login");
            }
          })

    } else { // 没有token
      if (requiredLogin) { // 访问需要权限的页面
        next('/login')
      } else {
        next()
      }
    }
  } else { // 已登录
    if (redirectAlreadyLogin) {
      next('/')
    } else {
      next()
    }
  }
})

export default router