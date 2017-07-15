/**
 * 一些全局参数
 */

export default {
  install(Vue, option) {

    //服务器端的Url
    Vue.prototype.serverUrl = 'http://localhost/',

    //注册信用卡账号的Url
    Vue.prototype.registerUrl = Vue.prototype.serverUrl + 'zhsqServer/register.php'
  }
}
