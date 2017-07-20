
<!-- 登录页 -->

<template>
  <div class="register">
    <p class="notice-title">请输入 您的信用卡号后8位</p>

    <!-- 信用卡号输入框 s -->
    <input type="text" class="card-number" maxlength="8" v-model="cardNum" @click="isShowNotice=false">
    <!-- 信用卡号输入框 e -->

    <!-- 注册信用卡账号按钮 s -->
    <a class="button-register" @click="rigisterCardNum()"></a>
    <!-- 注册信用卡账号按钮 e -->

    <!-- 输入错误产生的提示信息 s -->
    <p class="error-info" v-if="isShowNotice">{{ noticeContent }}</p>
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

          //用户输入的信用卡账号
          cardNum: '',

        //标记是否显示信用卡号后8位输入错误时产生的提示信息
        isShowNotice: false,

        //设置提示信息的内容
        noticeContent: '您输入的信用卡号后八位不正确，请重新输入！'
      };
    },

    methods: {

      //注册
      rigisterCardNum: function () {

          if (this.checkCardNum()) {

              //使用axios发送post请求实现注册
              this.axios({
                method: 'post',
                url: this.registerUrl,
                data: this.qs.stringify({cardnum: this.cardNum}),
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                }
              }).then(res => {
                  if (res.data == 0) {
                      this.noticeContent = '您输入的信用卡账号已经注册了！';
                      this.isShowNotice = true;

                  } else if (res.data == -1) {
                      this.noticeContent = '注册失败！'
                      this.isShowNotice = true;

                  //注册成功进入游戏
                  } else if (res.data == 1) {

                    //将信用卡号保存在本地
                    localStorage.setItem('cardNum', this.cardNum);
                    window.location.href = '#/countMoney';
                  }
              });
          }
      },

      //检测信用卡账号是否合法
      checkCardNum: function () {

        //如果用户输入的信用卡号不足8位
        if(this.cardNum.length < 8) {

          //显示信用卡号输入错误的提示信息
          this.noticeContent = '您输入的信用卡号后八位不正确，请重新输入！';
          this.isShowNotice = true;

          return false;
        }

        //如果输入的信用卡号后8位中存在汉字
        if(/[\u4E00-\u9FA5]/g.test(this.cardNum)) {

          //显示信用卡号输入错误的提示信息
          this.noticeContent = '您输入的信用卡号后八位不正确，请重新输入！';
          this.isShowNotice = true;

          return false;
        }

        //如果玩家输入的信用卡号后8位中存在非数字的字符
        if(!(/^\d+$/.test(this.cardNum)))
        {
          //显示信用卡号输入错误的提示信息
          this.noticeContent = '您输入的信用卡号后八位不正确，请重新输入！';
          this.isShowNotice = true;

          return false;
        }

        return true;
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
