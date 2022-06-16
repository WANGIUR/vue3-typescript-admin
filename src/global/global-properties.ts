import type { App } from 'vue'
import { formatUTCString, formatTimestamp } from '@/utils'

export default function (app: App) {
  app.config.globalProperties.$filters = {
    formatUTCT(value: string) {
      return formatUTCString(value)
    },
    formatTstamp(value: number) {
      return formatTimestamp(value)
    }
  }
}
