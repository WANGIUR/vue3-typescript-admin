import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default function (app: App) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    // component as any
    app.component(key, component as any)
  }
}
