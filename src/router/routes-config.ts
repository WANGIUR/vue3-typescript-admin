import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: () => import('views/login/index.vue')
  },
  {
    path: '/home',
    component: () => import('views/layout/index.vue')
  }
]

export default routes
