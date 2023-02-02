import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import Favorites from "@/components/Favorites.vue";
import ActivityGenerator from "@/components/ActivityGenerator.vue";
import "./assets/base.css"
import "./assets/main.css"

const routes = [
    {
        path: '/',
        component: ActivityGenerator
    },
    {
        path: '/favorites',
        component: Favorites
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


const app = createApp(App)
app.use(router)
app.mount('#app')