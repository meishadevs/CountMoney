import Vue from 'vue';
import Router from 'vue-router';

// 引用页面模板，供路由使用
import index from '@/pages/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
});
