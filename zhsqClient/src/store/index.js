
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './action';
import mutations from './mutations';

//使用Vuex状态管理器
Vue.use(Vuex);

const state = {

  //玩家的信用卡号后八位
  cardNum: '',

  //玩家在数钱游戏中数了 numMoney 张钱
  numMoney: 0,

  //用户在本次游戏中获得的总金额
  money: 0
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
