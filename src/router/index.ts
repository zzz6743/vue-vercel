import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Cart from '@/pages/Cart.vue'
import About from '@/pages/About.vue'
import Product from '@/pages/Product.vue'

const routes = [
    {
        path: '/', component: Home
    },
    {
        path: '/about', component: About
    },
    {
        path: '/product/:productId', component: Product
    },
    {
        path: '/cart', component: Cart
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes, 
})

export default router