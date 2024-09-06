import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: () => import('@/pages/home/index.vue'),
	},
	{
		path: '/about',
		component: () => import('@/pages/about/index.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
