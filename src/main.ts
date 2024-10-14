import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import router from './router/index.ts'
import { setupNaiveDiscreteApi } from '@/assets/ts/index.ts';
setupNaiveDiscreteApi()

const app = createApp(App)
app.use(router)
app.mount('#app')

