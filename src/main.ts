import { createApp } from 'vue'
import App from './App.vue'
import globalRegisterFn from '@/global'

const app = createApp(App)
app.use(globalRegisterFn)
app.mount('#app')
