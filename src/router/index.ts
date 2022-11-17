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
    component: () => Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '首页',
          icon: 'HomeFilled',
          keepAlive: true,
          requireAuth: true,
          breadCrumb: [{ path: '/dashboard', title: '首页' }],
        },
        component: () => import('@/views/dashboard/index.vue'),
      },
      {
        path: '/echarts',
        name: 'echarts',
        redirect: '/echarts/first',
        meta: {
          title: '数据可视化',
          icon: 'HomeFilled',
          keepAlive: true,
          requireAuth: true,
          breadCrumb: [{ path: '/echarts', title: '数据可视化' }],
        },
        component: () => import('@/views/echarts/index.vue'),
        children: [
          {
            path: '/echarts/first',
            name: 'echartsObne',
            meta: {
              title: '第一页',
              icon: 'HomeFilled',
              keepAlive: true,
              requireAuth: true,
              breadCrumb: [
                { path: '/echarts', title: '数据可视化' },
                { path: '/echarts/first', title: '第一页' },
              ],
            },
            component: () => import('@/views/echarts/first/index.vue'),
          },
          {
            path: '/echarts/second',
            name: 'echartsObn12312e',
            meta: {
              title: '第二页',
              icon: 'HomeFilled',
              keepAlive: true,
              requireAuth: true,
              breadCrumb: [
                { path: '/echarts', title: '数据可视化' },
                { path: '/echarts/second', title: '第二页' },
              ],
            },
            component: () => import('@/views/echarts/second/index.vue'),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
