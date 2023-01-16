import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: ()=> import('../view/Home.vue')
    },
    {
        path:'/about',
        name:'about',
        component: ()=>import('../view/About.vue')
    },
    {
        path:'/product',
        name:'product',
        component: ()=>import('../view/Product.vue')
    }

];

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router
