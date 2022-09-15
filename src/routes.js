import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/Home.vue'
import LoginComponent from './components/LoginComponent.vue';
import ProfileComponent from './components/ProfileComponent.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Login',
        path: '/login',
        component: LoginComponent
    },
    {
        name: 'Profile',
        path: '/profile',
        component: ProfileComponent
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
