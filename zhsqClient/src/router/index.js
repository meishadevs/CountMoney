
import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '@/pages/index.vue';
import ranking from '@/pages/ranking.vue';
import rule from '@/pages/rule.vue';
import merchant from '@/pages/merchant.vue';
import account from '@/pages/account.vue';
import register from '@/pages/register.vue';
import countMoney from '@/pages/countMoney.vue';
import turnTable from '@/pages/turnTable.vue';
import result from '@/pages/result.vue';

Vue.use(VueRouter);

export default new VueRouter({
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
    },
    {
      path: '/turnTable',
      name: 'turnTable',
      component: turnTable
    },
    {
      path: '/result',
      name: 'result',
      component: result
    }
  ]
});
