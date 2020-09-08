import Vue from 'vue';
import Router from 'vue-router';
import Home from '#Components/Home.vue';



const routes = [{
        path: '/',
        name: 'home',


        component: Home // () =>
            //import ('#Components/Login.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ('#Components/About.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('#Components/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('#Components/Register.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
            auth: true
        },
        component: () =>
            import ('#Components/Dashboard.vue')
    },

    {
        path: '/profile',
        name: 'profile',
        meta: {
            auth: true
        },
        component: () =>
            import ('#Components/Profile.vue')
    },

]



Vue.use(Router);
const router = new Router({
    //mode: 'history',
    base: process.env.BASE_URL,
    routes
});



router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user')

    if (to.matched.some(record => record.meta.auth) && !loggedIn) {
        next('/login')
        return
    }
    next()
})

export default router;