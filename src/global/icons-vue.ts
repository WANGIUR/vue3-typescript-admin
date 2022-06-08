import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default function (app: App) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    // any待优化
    app.component(key, component as any)
  }
}
