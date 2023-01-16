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
    }

];

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router
