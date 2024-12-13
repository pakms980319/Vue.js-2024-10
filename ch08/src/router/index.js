import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
import UserInfo from '../views/UserInfo.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue'),
        },
        {
            path: '/user/info',
            name: 'userInfo',
            component: UserInfo,
        },
        {
            path: '/user/:id',
            name: 'user',
            component: () => import('../views/UserView.vue')
        }
    ],
});
export default router;