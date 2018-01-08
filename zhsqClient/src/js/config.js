/**
 * 一些全局参数
 */

export default {
  install(Vue, option) {

      //服务器端的Url
      Vue.prototype.serverUrl = 'http://localhost/';

      //注册信用卡账号的Url
      Vue.prototype.registerUrl = Vue.prototype.serverUrl + 'zhsqServer/register.php';

    //获得用户在数钱游戏中的排名的Url
    Vue.prototype.rankingUrl = Vue.prototype.serverUrl + 'zhsqServer/ranking.php';

    //将用户在游戏中获得的金额发送到服务器的Url
    Vue.prototype.sendMoneyUrl = Vue.prototype.serverUrl + 'zhsqServer/sendResult.php';

    //获得优惠券的Url
    Vue.prototype.getCardUrl = Vue.prototype.serverUrl + 'zhsqServer/cardinfo.php';

    //获得数钱游戏中排名前十的用户的Url
    Vue.prototype.getRankingListUrl = Vue.prototype.serverUrl + 'zhsqServer/getRankingList.php';
  }
};
