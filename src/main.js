import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/index.scss'
import { Plugin } from 'vue-responsive-video-background-player'
import router from "./router";

const app = createApp(App)
app.use(Plugin)
app.use(router)
app.mount('#app')
