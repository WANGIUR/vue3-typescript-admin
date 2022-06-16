import type { App } from 'vue'
import router from '@/router'
import store from '@/store'
import iconsVue from './icons-vue'
import globalProperties from './global-properties'

export default function globalRegisterFn(app: App) {
  app.use(router)
  app.use(store)
  app.use(iconsVue)
  app.use(globalProperties)
}
