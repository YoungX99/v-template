import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import './styles/main.css'
import {
  createRouter,
  createWebHistory
} from 'vue-router'

import routes from 'pages-generated'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

const app = createApp(App)
app.use(router).mount('#app')
