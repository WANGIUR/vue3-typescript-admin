import { createApp } from 'vue'
import App from './App.vue'
import globalRegisterFn from '@/global'
import { setupStore } from './store'
import '@/styles/index.less'

const app = createApp(App)
app.use(globalRegisterFn)
// 初始store数据
setupStore()
app.mount('#app')
