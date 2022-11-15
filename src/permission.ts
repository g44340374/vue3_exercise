import router from './router';
import { RouteLocationNormalized } from 'vue-router';

import { useUserStore } from '@/store';
// 白名单
import whiteList from './config/default/whitelist';
// 进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({ showSpinner: false });

router.beforeEach(
  (to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => {
    NProgress.start();
    const { token } = useUserStore().$state;
    console.log(token);
    if (token) {
      if (to.path == '/login') {
        next({ path: '/' });
      } else {
        next();
      }
      NProgress.done();
    } else {
      // Has no token
      if (whiteList.indexOf(to.path) !== -1) {
        // In the free login whitelist, go directly
        next();
      } else {
        // Other pages that do not have permission to access are redirected to the login page.
        next(`/login?redirect=${to.path}`);
        NProgress.done();
      }
    }
  }
);

router.afterEach((to: RouteLocationNormalized) => {
  NProgress.done();
});
