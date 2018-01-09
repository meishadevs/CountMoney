
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from 'axios';
import qs from 'qs';
import config from './js/config';
import './css/reset.css';

//使用插件
Vue.use(config);

Vue.config.productionTip = false;

Vue.prototype.axios = axios;
Vue.prototype.qs = qs;

let app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
