import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录页',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    name: 'Layout',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => Layout,
    children: [
      {
        path: '/',
        name: 'dashboard',
        meta: {
          title: '首页1',
          keepAlive: true,
          requireAuth: true,
        },
        component: () => import('@/views/dashboard/index.vue'),
      },
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页2',
          keepAlive: true,
          requireAuth: true,
        },
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
