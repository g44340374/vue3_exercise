import { createApp } from 'vue';
import './permission.ts'; // 权限配置
import 'normalize.css'; // 浏览器默认样式

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import piniaStore from './store';

import App from './App.vue';
import router from '@/router';

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app
  .use(piniaStore)
  .use(ElementPlus, { size: 'small', zIndex: 3000 })
  .use(router)
  .mount('#app');
