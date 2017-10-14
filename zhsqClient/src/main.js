
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import qs from 'qs';
import config from './js/config';

//使用插件
Vue.use(config);

Vue.config.productionTip = false;

Vue.prototype.axios = axios;
Vue.prototype.qs = qs;

let app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
