
<!-- 活动规则页 -->

<template>
  <div class="count-money">
    <div class="mask" v-if="isShowMask" @click="startCountMoney()"></div>
    <div class="count-container" v-if="isShowMask == false" @mouseup="mouseUp($event)">

      <!-- 滚动的图片 s -->
      <div draggable="false">
        <img src="../assets/caitiao.png" class="caitiao-top" draggable="false" v-bind:style="{top: caitiaoTop + 'px'}">
        <img src="../assets/caitiao.png" class="caitiao-bottom" draggable="false" v-bind:style="{top: caitiaoBottom + 'px'}">
        <img src="../assets/qian.png" class="qian-top" draggable="false" v-bind:style="{top: qianTop + 'px'}">
        <img src="../assets/qian.png" class="qian-bottom" draggable="false" v-bind:style="{top: qianBottom + 'px'}">
      </div>
      <!-- 滚动的图片 -->

      <!-- 显示数钱张数的对话框 s -->
      <div class="shownum-dialog">{{ numMoney + '张'}}</div>
      <!-- 显示数钱张数的对话框 e -->

      <!-- 显示时间 s -->
      <div class="showtime-dialog" draggable="false">
        <img src="../assets/clock.png" draggable="false">
        <span class="show-time" draggable="false">{{ numTime + ':00s' }}</span>
      </div>
      <!-- 显示时间 e -->

      <!-- 手 s -->
      <div class="hand"></div>
      <!-- 手 e -->

      <!-- 待数的钱 s -->
      <div class="money" @mousedown="mouseDown($event)" @mouseup="mouseUp($event)" v-bind:style="{ top: moneyTop + 'px' }">
        <img src="../assets/money.png" class="money-img" draggable="false">
      </div>
      <!-- 待数的钱 e -->

      <!-- 游戏结束对话框 s -->
      <div class="gameover-dialog" v-if="numTime <= 0">
        <p class="title">您在刚刚的数钱游戏中</p>
        <p class="show-num">{{ '数了 ' + numMoney + ' 张钞票' }}</p>
        <p class="show-content">点击确认按钮进入幸运转盘</p>
        <p class="show content">看看手气如何</p>
        <button class="into-zp" @click="intoTurntable"></button>
      </div>
      <!-- 游戏结束对话框  e -->
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    data() {
      return {

        //数钱的张数
        numMoney: 0,

        //是否显示模板
        isShowMask: true,

        //上面的彩条的top属性值
        caitiaoTop: 42,

        //下面的彩条的top属性值
        caitiaoBottom: 277,

        qianTop: 42,
        qianBottom: 227,

        //背景滚动的速度
        rollSpeed: 7,

        //剩余时间
        numTime: 20,

        //用于滚动背景的定时器
        scrTimer: null,

        //更新时间的定时器
        updateTimer: null,

        //标记不能数钱
        isCanMove: true,

        //按下鼠标时，鼠标的y坐标
        startY: 0,

        //松开鼠标时，鼠标的y坐标
        endY: 0,

        //标记可以触摸
        isTouch: true,

        //钱的top属性值
        moneyTop: 405,

        //移动钱的定时器
        moveMoneyTimer: null
      };
    },

    //回调函数
    methods: {

      ...mapActions([
          'setNumMoney'
      ]),

      //开始数钱
      startCountMoney() {
        this.isShowMask = false;
        this.scrTimer = setInterval(this.scrollBackground, 30);
        this.updateTimer = setInterval(this.updateTime, 1000);
        setInterval(this.update, 1);
      },

      //循环滚动背景
      scrollBackground() {

        this.caitiaoTop += this.rollSpeed;
        this.caitiaoBottom += this.rollSpeed;
        this.qianTop += this.rollSpeed;
        this.qianBottom += this.rollSpeed;

        if (this.caitiaoTop > 662) {
          this.caitiaoTop = 42;
        }

        if (this.caitiaoBottom > 662) {
          this.caitiaoBottom = 42;
          this.caitiaoBottom = 42;
        }

        if (this.qianTop > 662) {
          this.qianTop = 42;
        }

        if (this.qianBottom > 662) {
          this.qianBottom = 42;
        }
      },

      //更新时间
      updateTime() {
        this.numTime -= 1;

        if (this.numTime === 0) {
          clearInterval(this.updateTimer);
        }
      },

      //按下鼠标的时候被调用
      mouseDown(event) {

        //不能再数钱
        if (!this.isTouch) {
          return;
        }

        //获得按下鼠标时,鼠标的y坐标
        this.startY = event.clientY;
      },

      //松开鼠标时被调用
      mouseUp(event) {

        //不能数钱
        if (!this.isTouch) {
          return;
        }

        //获得松开鼠标时，鼠标的y坐标
        this.endY = event.clientY;

        //如果向上滑动了10个像素
        if (this.startY - this.endY > 10) {

          if (this.isCanMove) {
            this.isCanMove = false;
            this.numMoney += 1;
            this.moveMoneyTimer = setInterval(this.moveMoney, 1);
          }
        }

        this.startY = null;
      },

      moveMoney() {
        this.moneyTop -= 10;
      },

      //用于检测
      update() {

        if (this.moneyTop <= -282) {
          this.isCanMove = true;
          this.moneyTop = 405;
          clearInterval(this.moveMoneyTimer);
        }

        //如果数钱游戏结束
        if (this.numTime <= 0) {

          //关闭定时器
          clearInterval(this.scrTimer);
          clearInterval(this.updateTimer);

          //不能再触摸
          this.isTouch = false;
        }
      },

      //进入转转盘
      intoTurntable() {

        if (this.numMoney <= 0) {
          this.$router.push('/');
          return;
        }

        this.setNumMoney(this.numMoney);
        this.$router.push('/turnTable');
      }
    }
  };
</script>


<style scoped>
  .count-money {
    width: 100%;
    height: 100%;
    background: url("../../static/images/bg.png") no-repeat;
    overflow: hidden;

    /* 使用弹性布局 */
    display: flex;

    /* 设置主轴的方向为竖直方向 */
    flex-direction: column;

    /* 设置主轴的对齐方式为左对齐 */
    justify-content: flex-start;

    /* 标签在侧轴上的对齐方式为居中对齐 */
    align-items: center;

    position: relative;
  }

  .mask{
    width: 100%;
    height: 662px;
    background: url("../../static/images/tishi.png") no-repeat;
    position: relative;
    z-index: 100;
  }

  .caitiao-top,
  .caitiao-bottom {
    z-index: 1;
    position: absolute;
    left: 0;
  }

  .qian-top,
  .qian-bottom {
    width: 100%;
    z-index: 1;
    position: absolute;
  }

  .shownum-dialog {
    width: 190px;
    height: 62px;
    margin-left: 50px;
    margin-top: 45px;
    font: 48px/62px '微软雅黑', 'microsoft yahei';
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 25px;
    text-align: center;
    transform: scale(0.7);
    z-index: 4;
    color: #fff;
    position: relative;
  }

  .showtime-dialog {
    width: 100%;
    height: 30px;
    padding-left: 100px;
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
    font: 20px/30px '微软雅黑', 'microsoft yahei';
    color: #fff;
    vertical-align: top;
    display: inline-block;
  }

  .hand {
    width: 440px;
    height: 347px;
    margin-left: -110px;
    margin-top: 221px;
    background: url("../../static/images/hand.png");
    background-repeat: no-repeat;
    transform: scale(0.75);
    z-index: 2;
    position: relative;
  }

  .money {
    z-index: 3;
    position: absolute;
    left: 115px;
  }

  .money img {
    width: 148px;
    display: inline-block;
  }

  .gameover-dialog {
    width: 414px;
    height: 262px;
    margin-left: -207px;
    background: url("../../static/images/dialog.png");
    background-repeat: no-repeat;
    background-size: contain;
    text-align: center;
    color: #fff;
    font-family: '微软雅黑', 'microsoft yahei';
    font-size: 22px;
    z-index: 5;
    position: absolute;
    left: 50%;
    top: 160px;
  }

  .gameover-dialog .title {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .gameover-dialog .show-num {
    margin-bottom: 30px;
  }

  .gameover-dialog .show-content {
    margin-bottom: 10px;
  }

  .into-zp {
    width: 120px;
    height: 51px;
    margin-top: 14px;
    background: url("../../static/images/buttonOk.png") no-repeat;
    background-size: contain;
    display: inline-block;
  }
</style>
