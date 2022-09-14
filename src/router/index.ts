import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/views/dashboard/index.vue'),
  },
  {
    path: '/first',
    name: 'First',
    meta: {
      title: '第一天',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/views/first/index.vue'),
  },
  {
    path: '/second',
    name: 'Second',
    meta: {
      title: '第二天',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/views/second/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
