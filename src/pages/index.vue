<template>
  <div class="index">
    <div class="container">

      <!-- 开始游戏按钮 s -->
      <button class="start-game"></button>
      <!-- 开始游戏按钮 e -->

      <!-- 排行榜按钮 s -->
      <button class="ranking"></button>
      <!-- 排行榜按钮 e -->

      <!-- 下面的按钮 s -->
      <div class="bottom">

        <!-- 活动商户按钮 s -->
        <button class="merchant"></button>
        <!-- 活动商户按钮 e -->

        <button class="rule">活动规则</button>

        <!-- 我的账户按钮 s -->
        <button class="account"></button>
        <!-- 我的账户按钮 e -->

      </div>
      <!-- 下面的按钮 e -->

    </div>
  </div>
</template>

<style scoped>
  .index {
    width: 100%;
    height: 100%;
    background: url('../assets/bg-index.png') no-repeat;
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
