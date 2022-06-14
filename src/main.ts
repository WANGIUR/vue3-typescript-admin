import { createApp } from 'vue'
import App from './App.vue'
import globalRegisterFn from '@/global'
import { setupStore } from './store'
import '@/styles/index.less'

const app = createApp(App)
// 初始store数据
setupStore()
app.use(globalRegisterFn)
app.mount('#app')
