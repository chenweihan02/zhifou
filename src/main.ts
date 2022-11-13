import { createApp } from 'vue'

import App from './App.vue'
import store from './store'
import router from './router'
import './style.css'

// 异步组件
// import Home from './views/Home.vue'

createApp(App).use(router).use(store).mount('#app')
