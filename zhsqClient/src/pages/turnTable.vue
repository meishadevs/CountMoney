
<!-- 转盘页 -->

<template>
  <div class="turntable">

    <!-- 转盘上的指针 s -->
    <div class="pointer" v-bind:style="{transform: 'rotate(' + rotate + 'deg)' }">
    </div>
    <!-- 转盘上的指针 e -->

    <div class="show-ranking">{{ '您在数钱游戏中获得的排名是第 ' + ranking + ' 名' }}</div>
    <div class="notice-content">数钱所得数量乘以幸运盘所得面值等于最终获得现金劵数额。</div>

    <!-- 转动转盘按钮 s -->
    <button class="start-game" @click=" rotaTurntable()"></button>
    <!-- 转动转盘按钮 e -->

  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex';

  export default {
    data() {
      return {

        //玩家在数钱游戏中的排名
        ranking: 0,

        //1元钱的下标范围 0~3
        // 2元的下标范围4~6
        // 0.5元的范围7~9
        arrayAngle: [20, 140, 220, 310, 180, 70, 250, 110, 280, 340],

        //在转转盘中转到的金额数
        price: 0,

        //指针转动的角度
        rotate: 0,

        money: 0,

        //标记能点击开始按钮
        isClick: true
      };
    },

    //初始化
    mounted() {
      this.$nextTick(() => {
        this.getLinking();
      });
    },

    computed: mapState([
        'cardNum',
        'numMoney'
    ]),

    //回调函数
    methods: {

      ...mapActions([
          'setMoney'
      ]),

      //获得在数钱游戏中的排名
      getLinking() {

        //使用axios发送post请求,获得当前在数钱游戏中的排名
        this.axios({
          method: 'post',
          url: this.rankingUrl,
          data: this.qs.stringify({
            cardNum: this.cardNum,
            numMoney: this.numMoney
          }),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(res => {

          //获得用户在数钱游戏中的排名
          this.ranking = res.data;
        });
      },

      //计算转盘应该转动多少角度
      sumRotation() {

        //角度索引
        var indexAngle = 0;

        //当数钱的张数超过60张
        if (this.numMoney > 60) {

          //首先让玩家转转盘转到1块钱
          this.price = 1;

          //计算玩家获得的总金额
          this.money = Math.floor(this.price * this.numMoney);

          //当玩家转到1块钱，并且他获得的总金额超过120块钱的时候
          if (this.money > 120) {

            //让玩家转到5毛钱
            this.price = 0.5;
            this.money = Math.floor(this.price * this.numMoney);

            //当玩家转到5毛钱，并且他获得的总金额还是超过120块钱的时候
            if (this.money > 120) {

              //并且让转盘转到1块钱
              this.price = 1;

              //直接给玩家120块钱
              this.money = 120;
            }
          }
        }

        //当数钱的张数小于60张
        if (this.numMoney > 0 && this.numMoney <= 60) {

          var array = [0.5, 1, 2, 0.5, 1, 2, 0.5, 1, 0.5];

          //计算本次游戏中玩家可以获得多少钱
          var i = Math.floor(Math.random() * 8);
          this.price = array[i];

          //计算本次游戏中玩家可以获得多少钱
          this.money = Math.floor(this.price * this.numMoney);

          //当玩家数钱的张数小于20张
          if (this.numMoney < 20) {

            var arr = [2, 1, 2, 1, 1, 2, 2, 1, 2];

            //计算本次游戏中玩家可以获得多少钱
            var index = Math.floor(Math.random() * 8);
            this.price = arr[index];

            //计算本次游戏中玩家可以获得多少钱
            this.money = Math.floor(this.price * this.numMoney);
          }
        }

        //如果转转盘时需要转到一块钱
        if (this.price === 1) {

          indexAngle = Math.floor(Math.random() * 3);

          //计算指针转动的角度
          this.rotate = this.arrayAngle[indexAngle];

          return;
        }

        //如果转转盘时转到两块钱
        if (this.price === 2) {
          indexAngle = Math.floor(Math.random() * 2 + 4);
          this.rotate = this.arrayAngle[indexAngle];
          return;
        }

        //如果转转盘时既没有转到1块钱，又没有转到两块钱
        if (this.price === 0.5) {
          indexAngle = Math.floor(Math.random() * 2 + 7);
          this.rotate = this.arrayAngle[indexAngle];
          return;
        }
      },

      //转动转盘
      rotaTurntable() {

        if (!this.isClick) {
          return;
        }

        this.isClick = false;

        //计算转盘应旋转多少角度
        this.sumRotation();

        this.setMoney(this.money);

        this.rotate = 360 * 7 + this.rotate;

        setTimeout(() => {
          this.$router.push('/result');
        }, 3000);
      }
    }
  };
</script>


<style scoped>
  .turntable {
    width: 100%;
    height: 100%;
    background: url("../../static/images/bgTurntable.png") no-repeat;

    /* 使用弹性布局 */
    display: flex;

    /* 主轴的方向为竖直方向 */
    flex-direction: column;

    /* 标签在主轴上的对齐方式为左对齐 */
    justify-content: flex-start;

    /* 标签在侧轴上的对齐方式为居中对齐 */
    align-items: center;
  }

  .pointer {
    width: 85px;
    height: 94px;
    margin-top: 246px;
    margin-left: -3px;
    background: url("../../static/images/turn_arrow.png") no-repeat;
    background-size: contain;
    transform-origin: 50% 50%;
    transition: all 0.6s;

    /* 设置以慢速结束的过度效果 */
    transition-timing-function: ease-out;
  }

  .show-ranking {
    margin-top: 190px;
    font-weight: bold;
    font-size: 18px;
  }

  .notice-content {
    margin-top: 20px;
    font-family: '微软雅黑', 'microsoft yahei';
  }

  .start-game {
    width: 124px;
    height: 50px;
    margin-top: 20px;
    background: url("../../static/images/start.png") no-repeat;
    background-size: contain;
  }
</style>
