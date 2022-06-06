import { createRouter, createWebHistory } from 'vue-router'
import { localCache } from '@/utils'
import routes from './router-config'

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
