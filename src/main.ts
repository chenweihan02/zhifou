import { createApp } from 'vue'

import App from './App.vue'
import store from './store'
import router from './router'
import './style.css'
import useDriectives from '@/directives'

// 异步组件
// import Home from './views/Home.vue'
// import '@/assets/css/index.css'

import  VueEasyMDE  from 'vue3-easymde'
import "easymde/dist/easymde.min.css"

const app = createApp(App)
useDriectives(app)
// app.use(useDriectives)

app.use(VueEasyMDE)

app.use(router).use(store).mount('#app')
