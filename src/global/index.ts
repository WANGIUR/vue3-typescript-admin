import type { App } from 'vue'
import router from '@/router'
import store from '@/store'

export default function globalRegisterFn(app: App) {
  app.use(router)
  app.use(store)
}
