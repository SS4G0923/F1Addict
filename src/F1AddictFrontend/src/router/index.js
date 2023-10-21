import { createRouter, createWebHistory } from 'vue-router'
import index from '../index.vue'
import drivers from '../drivers.vue'
import teams from '../teams.vue'
import login from '../login.vue'
import signup from '../signup.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/home",
        },
        {
            path: "/home",
            name: "home",
            component: index,
            meta: {
              title: "Home - F1 Addict",
              icon:"../rescources/images/icon192x192.avif" 
            }
        },
        {
            path: "/drivers",
            name: "drivers",
            component: drivers,
        },
        {
            path: "/teams",
            name: "teams",
            component: teams,
        },
        {
            path: "/login",
            name: "login",
            component: login,
        },
        {
            path: "/signup",
            name: "signup",
            component: signup,
        }
    ]
    })

export default router