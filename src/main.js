import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { createRouter,createWebHashHistory } from "vue-router";

import MainPage from './components/MainPage.vue'
import RecoPage from './components/RecoPage.vue'
import HistoryPage from './components/HistoryPage.vue'


window.addEventListener("beforeunload", function (e) {
    sessionStorage.clear('bmr-uid')
});

const routes = [
    { path: '/reco', component: RecoPage },
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
