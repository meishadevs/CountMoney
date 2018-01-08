
export default {

  //设置玩家的信用卡号后八位
  setCardNum({ commit }, cardNum) {
    commit('setCardNum', cardNum);
  },

  //设置玩家在数钱游戏中数钱的张数
  setNumMoney({ commit }, numMoney) {
    commit('setNumMoney', numMoney);
  },

  setMoney({ commit }, money) {
    commit('setMoney', money);
  }
};
