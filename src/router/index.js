import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/keranjang',
			component: () => import('../views/Keranjang.vue')
		},
        {
            path: '/akun',
            component: () => import('../views/Akun.vue')
        },
        {
            path: '/saldo',
            component: () => import('../views/saldo.vue')
        },
        {
            path: '/search',
            component: () => import('../views/search.vue')
        },
        {
            path: '/produk',
            name: 'cart',
            component: () => import('../views/produk.vue')
        },
        {
            path: '/login',
            component: () => import('../views/login.vue')
        },
        {
            path: '/register',
            component: () => import('../views/register.vue')
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: () => import('../views/checkout.vue')
        },
        {
            path: '/konfirmasi-order',
            name: 'konfirmasi-order',
            component: () => import('../views/konfirmasi-order.vue')
        },
        {
            path: '/riwayat-transaksi',
            name: 'orders',
            component: () => import('../views/riwayat-transaksi.vue')
        },
        {
            path: '/settings',
            name: 'setting',
            component: () => import('../views/settings.vue')
        },
                {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/contact.vue')
        },
	],
})

export default router