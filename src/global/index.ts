import type { App } from 'vue'
import router from '@/router'
import store from '@/store'
import iconsVue from './icons-vue'

export default function globalRegisterFn(app: App) {
  app.use(router)
  app.use(store)
  app.use(iconsVue)
}
