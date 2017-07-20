
<!-- 首页 -->

<template>
  <div class="index">
    <div class="container">

      <!-- 开始游戏按钮 s -->
      <a class="start-game" @click="startGame()"></a>
      <!-- 开始游戏按钮 e -->

      <!-- 排行榜按钮 s -->
      <a class="ranking" href="#/ranking"></a>
      <!-- 排行榜按钮 e -->

      <!-- 下面的按钮 s -->
      <div class="bottom">

        <!-- 活动商户按钮 s -->
        <a class="merchant" href="#/merchant"></a>
        <!-- 活动商户按钮 e -->

        <!-- 活动规则按钮 s -->
        <a class="rule" href="#/rule">活动规则</a>
        <!-- 活动规则按钮 e -->

        <!-- 我的账户按钮 s -->
        <a class="account" href="#/account"></a>
        <!-- 我的账户按钮 e -->

      </div>
      <!-- 下面的按钮 e -->

    </div>
  </div>
</template>


<script>
  module.exports = {

      data: function () {
      return {
          audio: null
      };
    },

      //初始化
      mounted: function () {
        this.$nextTick(function () {
        })
      },

      methods: {
          startGame: function () {

            //获得存储在本地的信用卡账号
            var cardNum = localStorage.getItem('cardNum');

           if (cardNum != null) {
              window.location.href = '#/countMoney';
           } else {
               window.location.href = '#/register';
          }
          }
      }
  };
</script>


<style scoped>
  .index {
    width: 100%;
    height: 100%;
    background: url('../assets/bgIndex.png') no-repeat;
  }

  .index .container {

    /* 使用弹性布局 */
    display: flex;

    /* 主轴的方向为竖直方向 */
    flex-direction: column;

    /* 标签在主轴上的对齐方式为左对齐 */
    justify-content: flex-start;

    /* 标签在侧轴上的对齐方式为居中对齐 */
    align-items: center;
  }

  /* 开始数钱按钮 */
  .start-game {
    width: 317px;
    height: 124px;
    margin-top: 422px;
    background: url("../assets/buttonStart.png") no-repeat;
    transform: scale(0.5);
  }

  /* 排行榜按钮 */
  .ranking {
    width: 245px;
    height: 98px;
    margin-top: -42px;
    background: url("../assets/buttonRanking.png") no-repeat;
    transform: scale(0.5);
  }

  .bottom {
    display: flex;
  }

  /* 活动商户按钮 */
  .merchant {
    width: 204px;
    height: 61px;
    margin-left: -50px;
    background: url("../assets/buttonMerchant.png") no-repeat;
    transform: scale(0.6);
  }

  /* 活动规则 */
  .rule {
    height: 25px;
    line-height: 25px;
    margin-top: 16px;
    font-family: Arial;
    font-size: 20px;
    color: #fff;
    border-bottom: solid 1px #fff;
    background-color: transparent;
  }

  .rule:active {
    transform: scale(1.2);
  }

  /* 活动商户按钮 */
  .account {
    width: 204px;
    height: 61px;
    margin-right: -50px;
    background: url("../assets/buttonAccount.png") no-repeat;
    transform: scale(0.6);
  }
</style>
