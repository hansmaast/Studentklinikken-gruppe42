import Vue from 'vue'
import Router from "vue-router";
import Home from './views/Home'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
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
            path: '/components',
            name: 'components',
            component: () => import('./views/_components/_Components.vue'),
            children: [
                {
                    path: 'forms',
                    component: () => import('./views/_components/_Forms.vue')
                }
            ],
            meta: {}
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