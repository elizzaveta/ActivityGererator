import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import Favorites from "@/components/Favorites/Favorites.vue";
import ActivityGenerator from "@/components/Home/ActivityGenerator.vue";
import "./assets/base.css"
import "./assets/main.css"
import Settings from "@/components/Settings/Settings.vue";
import AppearanceTab from "@/components/Settings/Appearance/AppearanceTab.vue";
import About from "@/components/About/About.vue";
import DataTab from "@/components/Settings/Data/DataTab.vue";

const routes = [
    {
        path: '/',
        component: ActivityGenerator
    },
    {
        path: '/favorites',
        component: Favorites
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/settings',
        component: Settings,
        children:[
            {
                path: 'appearance',
                component: AppearanceTab

            },
            {
                path: 'data',
                component: DataTab
            }
        ]
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})


const app = createApp(App)
app.use(router)
app.mount('#app')