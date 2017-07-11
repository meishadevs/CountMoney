
<!-- 登录页 -->

<template>
  <div class="register">
    <p class="notice-title">请输入 您的信用卡号后8位</p>

    <!-- 信用卡号输入框 s -->
    <input type="text" class="card-number" maxlength="8" v-model="cardNum">
    <!-- 信用卡号输入框 e -->

    <!-- 注册信用卡账号按钮 s -->
    <a class="button-register" @click="rigisterCardNum()"></a>
    <!-- 注册信用卡账号按钮 e -->

    <!-- 输入错误产生的提示信息 s -->
    <p class="error-info">您输入的信用卡号后八位不正确，请重新输入</p>
    <!-- 输入错误产生的提示信息 e -->

    <p class="notice-content">
      注意！注意！注意！<br/>
      请输入您到线下参与活动的中国银行信用卡号后八位，如输入有误将无法享受优惠权益！
    </p>
  </div>
</template>


<script>
  module.exports = {

    data: function () {
      return {

        // 用于记录用户输入的信用卡号后8位
        cardNum: '',

        // 信用卡账号输入错误产生的提示信息
        noticeInfo: ''
      };
    },

    methods: {

      // 注册
      rigisterCardNum: function () {

        // 检测
        this.checkCardNum();
      },

      // 检测信用卡账号是否合法
      checkCardNum: function () {

        // 如果用户没有输入信用卡账号
        if (this.cardNum.length == 0) {
          console.log('调用');
        }
      }
    }
  };
</script>


<style scoped>
  .register {
    width: 100%;
    height: 100%;
    background: url("../assets/bg.png") no-repeat;
    text-align: center;

    /* 主轴的方向为竖直方向 */
    flex-direction: column;

    /* 标签在主轴上的对齐方式为左对齐 */
    justify-content: flex-start;

    /* 标签在侧轴上的对齐方式为居中对齐 */
    align-items: center;
  }

  .notice-title {
    padding-top: 190px;
    font-size: 22px;
    color: #fff;
  }

  .card-number {
    width: 255px;
    height: 36px;
    margin-top: 5px;
    font-size: 20px;
    text-align: center;
    border-radius: 5px;
    outline-style: none;
  }

  .button-register {
    width: 202px;
    height: 90px;
    background: url("../assets/buttonOk.png");
    display: inline-block;
    transform: scale(0.5);
    cursor: pointer;
    position: relative;
    bottom: 10px;
  }

  .error-info {
    font-size: 20px;
    color: red;
    position: relative;
    bottom: 20px;
  }

  .notice-content {
    color: #fff;
    font-size: 20px;
    text-align: left;
  }
</style>
