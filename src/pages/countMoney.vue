
<!-- 活动规则页 -->

<template>
  <div class="count-money">
    <div class="mask" v-if="isShowMask" @click="startCountMoney()"></div>
    <div class="count-container" v-if="isShowMask == false">

      <!-- 滚动的图片 s -->
      <div>
        <img src="../assets/caitiao.png" class="caitiao-top" v-bind:style="{top: caitiaoTop + 'px'}">
        <img src="../assets/caitiao.png" class="caitiao-bottom" v-bind:style="{top: caitiaoBottom + 'px'}">
        <img src="../assets/qian.png" class="qian-top" v-bind:style="{top: qianTop + 'px'}">
        <img src="../assets/qian.png" class="qian-bottom" v-bind:style="{top: qianBottom + 'px'}">
      </div>
      <!-- 滚动的图片 -->

      <!-- 显示数钱张数的对话框 s -->
      <div class="shownum-dialog">{{ numMoney + '张'}}</div>
      <!-- 显示数钱张数的对话框 e -->

      <!-- 显示时间 s -->
      <div class="showtime-dialog">
        <img src="../assets/clock.png" alt="">
        <span class="show-time">{{ numTime + ':00s' }}</span>
      </div>
      <!-- 显示时间 e -->

      <!-- 手 s -->
      <div class="hand"></div>
      <!-- 手 e -->

      <div class="money">
        <img src="../assets/money.png" class="money-img">
      </div>
    </div>
  </div>
</template>


<script>
  module.exports = {
    data: function () {
      return {

        //是否显示模板
        isShowMask: true,

        //上面的彩条的top属性值
        caitiaoTop: 42,

        //下面的彩条的top属性值
        caitiaoBottom: 277,

        qianTop: 42,
        qianBottom: 227,

        //钱的张数
        numMoney: 0,

        //背景滚动的速度
        rollSpeed: 7,

        //剩余时间
        numTime: 10,

        //用于滚动背景的定时器
        scrTimer: null,

        //更新时间的定时器
        updateTimer: null
      }
    },

    //初始化
    mounted: function () {
      this.$nextTick(function () {
      })
    },

    //回调函数
    methods: {

        //开始数钱
        startCountMoney: function () {
            this.isShowMask = false;
            this.scrTimer = setInterval(this.scrollBackground, 30);
            this.updateTimer = setInterval(this.updateTime, 1000);
        },

        //循环滚动背景
        scrollBackground:function() {

          this.caitiaoTop += this.rollSpeed;
          this.caitiaoBottom += this.rollSpeed;
          this.qianTop += this.rollSpeed;
          this.qianBottom += this.rollSpeed;

          if(this.caitiaoTop > 662) {
              this.caitiaoTop = 42;
          }

          if(this.caitiaoBottom > 662) {
            this.caitiaoBottom = 42;
          }

          if(this.qianTop > 662) {
            this.qianTop = 42;
          }

          if(this.qianBottom > 662) {
            this.qianBottom = 42;
          }
        },

        //更新时间
        updateTime: function () {
            this.numTime -= 1;

            if (this.numTime == 0) {
                clearInterval(this.updateTimer);
            }
        }
      }
  }
</script>


<style scoped>
  .count-money {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: url("../assets/bg.png") no-repeat;

    /* 使用弹性布局 */
    display: flex;

    /* 主轴的方向为竖直方向 */
    flex-direction: column;

    /* 标签在主轴上的对齐方式为左对齐 */
    justify-content: flex-start;

    /* 标签在侧轴上的对齐方式为居中对齐 */
    align-items: center;

    position: relative;
  }

  .mask{
    width: 100%;
    height: 662px;
    background: url("../assets/tishi.png") no-repeat;
    position: relative;
    z-index: 100;
  }

  .caitiao-top,
  .caitiao-bottom {
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 1;
    position: absolute;
    left: 0;
  }

  .qian-top,
  .qian-bottom {
    width: 100%;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: absolute;
    z-index: 1;
  }

  .shownum-dialog {
    width: 190px;
    height: 62px;
    margin-left: 50px;
    margin-top: 45px;
    font: 48px/62px 'microsoft yahei';
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 25px;
    color: #fff;
    text-align: center;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 4;
    transform: scale(0.7);
    position: relative;
  }

  .showtime-dialog {
    width: 100%;
    height: 30px;
    padding-left: 100px;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 4;
    position: relative;
  }

  .showtime-dialog img {
    width: 32px;
    height: 30px;
    display: inline-block;
  }

  .showtime-dialog .show-time {
    height: 30px;
    font: 20px/30px 'microsoft yahei';
    color: #fff;
    vertical-align: top;
    display: inline-block;
  }

  .hand {
    width: 440px;
    height: 347px;
    margin-left: -110px;
    margin-top: 221px;
    background: url("../assets/hand.png") no-repeat;
    transform: scale(0.75);
    z-index: 2;
    position: relative;
  }

  .money {
    z-index: 3;
    position: absolute;
    top: 405px;
    left: 115px;
  }

  .money img {
    width: 148px;
    display: inline-block;
  }
</style>
