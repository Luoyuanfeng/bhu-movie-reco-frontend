import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { createRouter,createWebHashHistory } from "vue-router";

import RecoPage from './components/RecoPage.vue'
import RecallPage from './components/RecallPage.vue'
import HistoryPage from './components/HistoryPage.vue'


window.addEventListener("beforeunload", function (e) {
    sessionStorage.clear('bmr-uid')
});

const routes = [
    { path: '/sort', component: RecoPage },
    { path: '/recall', component: RecallPage },
    { path: '/history', component: HistoryPage },
]
  
const router = createRouter({
    history:createWebHashHistory('/'),
    routes
})
  

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
