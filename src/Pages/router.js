export default [
    {
        path: '/',
        redirect: '/Login',
        meta:{
            title: 'home'
        },
        children:[]
    },
    {
        path: '/Login',
        name: 'Login',
        component: () => import('@/Pages/Login.vue'),
        meta:{
            title: 'Login'
        }
    },
    {
    path:'/register',
    name:'register',
    component: () => import('@/Pages/Register.vue'),
    meta:{
        title: 'Register'
    },
    children:[]
    },
    {
        path:'/calendar',
        name:'calendar',
        component: () => import('@/Pages/Calendar.vue'),
        meta:{
            title: 'Calendar'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        // redirect: '/NotFound',
        name: 'NotFound',
        component: () => import('@/Pages/NotFound.vue'),
        meta:{
            title: 'About'
        },
        children:[]
    }
]