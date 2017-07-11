
import Vue from 'vue';
import Router from 'vue-router';

// 引用页面模板，供路由使用
import index from '@/pages/index.vue';
import ranking from '@/pages/ranking.vue';
import rule from '@/pages/rule.vue';
import merchant from '@/pages/merchant.vue';
import account from '@/pages/account.vue';
import register from '@/pages/register.vue';
import countMoney from '@/pages/countMoney.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: ranking
    },
    {
      path: '/rule',
      name: 'rule',
      component: rule
    },
    {
      path: '/merchant',
      name: 'merchant',
      component: merchant
    },
    {
      path: '/account',
      name: 'account',
      component: account
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/countMoney',
      name: 'countMoney',
      component: countMoney
    }
  ]
});
