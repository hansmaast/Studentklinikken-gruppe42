import Vue from 'vue'
import Router from "vue-router";
import UserView from './views/UserView'
import StartPage from './views/StartPage'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'userview',
            component: UserView,
            children: [
                {
                    path: '',
                    name: 'startPage',
                    component: StartPage
                },
                {
                    path: 'home',
                    name: 'home',
                    component: () => import('./views/Home.vue')
                },
                {
                    path: 'booking',
                    name: 'booking',
                    component: () => import('./views/Booking.vue')
                },
                {
                    path: 'mybookings',
                    name: 'myBooking',
                    component: () => import('./views/MyBookings.vue')
                },
                {
                    path: 'akupunktur',
                    name: 'akupunktur',
                    component: () => import('./views/Akupunktur.vue')
                },
                {
                    path: 'osteopati',
                    name: 'osteopati',
                    component: () => import('./views/Osteopati.vue')
                },
                {
                    path: 'kostholdsveiledning',
                    name: 'kostholdsveiledning',
                    component: () => import('./views/Kostholdsveiledning.vue')
                },
                {
                    path: 'fysiologisktestlab',
                    name: 'fysiologisktestlab',
                    component: () => import('./views/FysiologiskTestlab.vue')
                },
                {
                    path: 'login',
                    name: 'login',
                    component: () => import('./views/Login.vue')
                },
                {
                    path: 'register',
                    name: 'register',
                    component: () => import('./views/Register.vue'),
                },
            ]
        },
        {
            path: '/ansatt',
            name: 'ansatt',
            component: () => import('./views/ansatt/Ansatt.vue'),
            children: [
                {
                    path: '',
                    component: () => import('./views/ansatt/Ansatt_Login.vue')
                },
                {
                    path: 'home',
                    component: () => import('./views/ansatt/Ansatt_Home.vue')
                },
                {
                    path: 'timeliste',
                    component: () => import('./views/ansatt/Ansatt_Timeliste.vue')
                },
                {
                    path: 'ansattoversikt',
                    component: () => import('./views/ansatt/Ansatt_OversiktAnsatte.vue')
                },
                {
                    path: 'kundeoversikt',
                    component: () => import('./views/ansatt/Ansatt_OversiktKunder.vue')
                },
            ]
        }
    ]
})

export default router;