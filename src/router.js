import Vue from 'vue'
import Router from "vue-router";
import StartPage from './views/StartPage'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'startPage',
            component: StartPage
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('./views/Contact.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/Register.vue'),
        },
        {
            path: '/userData',
            name: 'users',
            component: () => import('./views/Users.vue'),
            meta: {}
        }
    ]
})

export default router;