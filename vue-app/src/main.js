import { createApp } from 'vue' //node_modules資料夾載入vue物件的createApp方法
import router from './router'
import App from './App.vue' //./到App.vue的資料夾中

// import './assets/main.css'

createApp(App).use(router).mount('#app')
