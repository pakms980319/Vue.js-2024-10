import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import NotFound from "@/views/NotFound.vue";
import ProductView from "@/views/ProductView.vue";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "",
            name: "Home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "About",
            component: AboutView,
            alias: "/aa",
        },
        {
            path: '/old-about',
            name: "Old About",
            redirect: '/about',
        },
        {
            path: "/product/:id",
            name: "Product",
            component: ProductView,
            props: true,
        },
        {
            path: "/user",
            component: () => import('@/views/UserView.vue'),
            children: [
                {
                    path: "info",
                    name: "user-info",
                    components: {
                        header: () => import("@/views/TheHeader.vue"),
                        default: () => import("@/views/UserInfo.vue"),
                        footer: () => import("@/views/TheFooter.vue"),
                    }
                },
            ]
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: NotFound
        }
    ]
});

export default router;