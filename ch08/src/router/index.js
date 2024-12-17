import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
/*
    동적 경로 매칭 
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
*/
/*
    예외처리
    const router = createRouter({
        history: createWebHistory(),
        routes: [
            // 아무것이다나 다 매치되고, 값은 `$route.params.pathMatch` 에 할당됨
            { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
            // `/user-`로 시작하는 모든 것과 일치하고, 값은 `$route.params.afterUser`에 할당된다.
            { path: '/user-:afterUser(.*)', component: UserGeneric },
        ],
    });
*/
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue'),
        },
        {
            path: '/user',
            name: 'user',
            components: {
                header: () => import('../views/TheHeader.vue'),
                default: () => import('../views/UserView.vue'),
                footer: () => import('../views/TheFooter.vue'),
            },
            children: [
                {
                    path: 'info',
                    name: 'user-info',
                    component: () => import('../views/UserInfo.vue'),
                },
                {
                    path: 'profile',
                    name: 'user-profile',
                    component: () => import('../views/UserProfile.vue'),
                },
            ]
        },
    ]
});

export default router;