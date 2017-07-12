
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import qs from 'qs';

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
Vue.prototype.qs = qs;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
