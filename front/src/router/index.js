import { createWebHistory, createRouter } from "vue-router";
import IndexComponent from "@/components/Index";

let title = 'Vue Behaviour Test app';

const routes = [
    {
        path: "/",
        name: "Index",
        props: { 'title': title },
        component: IndexComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (!to.matched.length) {
        next({
            path: '/',
            params: { nextUrl: to.fullPath }
        });
    }
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('user') == null) {
            next({
                path: '/',
                params: { nextUrl: to.fullPath }
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (localStorage.getItem('user') == null){
            next();
        }
        else{
            next({ name: 'Index'});
        }
    } else {
        next();
    }
})

export default router;