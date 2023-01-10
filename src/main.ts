import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import './styles/main.css'
import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

import routes from 'pages-generated'
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router).mount('#app')
