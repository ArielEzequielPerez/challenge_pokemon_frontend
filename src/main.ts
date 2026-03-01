import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.use(plugin, defaultConfig).mount('#app')
