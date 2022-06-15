import { createRouter, createWebHistory } from 'vue-router'
import { localCache, firstMenu } from '@/utils'
import routes from './routes-config'

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

  // 调试二级路有刷新时跳转至not-found页面
  // console.log(router.getRoutes())
  // console.log(to) // to匹配的是not-founds

  if (to.path === '/main') {
    return firstMenu.url
  }
})

export default router
