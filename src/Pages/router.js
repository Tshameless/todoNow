export default [
    {
        path: '/',
        // redirect: '/home',
        name: 'home',
        component: () => import('@/Pages/Login.vue'),
        meta:{
            title: 'Home'
        },
        children:[]
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