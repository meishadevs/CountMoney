
export default {

  //设置玩家的信用卡号后八位
  setCardNum: function (state, cardNum) {
    state.cardNum = cardNum;
  },

  //设置玩家在数钱游戏中数钱的张数
  setNumMoney: function (state, numMoney) {
    state.numMoney = numMoney;
  },

  setMoney: function (state, money) {
    state.money = money;
  }
};
