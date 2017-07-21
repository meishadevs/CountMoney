
<!-- 游戏结果页 -->

<template>
  <div class="ranking">
    <p class="title">恭喜您，您在游戏中获得一张现金劵</p>
    <p class="title-content">现金劵可以在活动商户中使用</p>
    <div class="item">
      <p class="show-price">{{ '您获得了一张 ' + money + ' 元的现金券' }}</p>
      <p class="show-date">{{ '现金券仅限' + year + '年' + month + '月' + day + '日当天使用' }}</p>
    </div>
    <a class="into-account" href="#/account"></a>
  </div>
</template>


<script>
  module.exports = {
    data: function () {
      return {
          cardNum: '',
          money: 0,
          numMoney: 0,
          year: '',
          month: '',
          day: ''
      }
    },

    //初始化
    mounted: function () {
      this.$nextTick(function () {

          this.cardNum = localStorage.getItem('cardNum');
          this.money = sessionStorage.getItem('money');
          this.numMoney = sessionStorage.getItem('numMoney');

          this.sendMoneyToServer();
      })
    },

    //回调函数
    methods: {

        sendMoneyToServer: function () {

          //使用axios发送post请求
          this.axios({
            method: 'post',
            url: this.sendMoneyUrl,
            data: this.qs.stringify({
              cardnum: this.cardNum,
              money: this.money,
              nummoney: this.numMoney
            }),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
          }).then(res => {
              console.log(res.data[0]);
              this.year = res.data[0].year;
              this.month = res.data[0].month;
              this.day = res.data[0].day;
          });
        }
    }
  }
</script>


<style scoped>
  .ranking {
    width: 100%;
    height: 100%;
    background: url("../assets/bg.png") no-repeat;

    /* 使用弹性布局 */
    display: flex;

    /* 主轴的方向为竖直方向 */
    flex-direction: column;

    /* 标签在主轴上的对齐方式为左对齐 */
    justify-content: flex-start;

    /* 标签在侧轴上的对齐方式为居中对齐 */
    align-items: center;
  }

  p {
    font-weight: bold;
    font-size: 20px;
  }

  .title {
    margin-top: 100px;
  }

  .title-content {
    margin-top: 8px;
    margin-bottom: 5px;
  }

  .item {
    width: 368px;
    height: 125px;
    background: url("../assets/item.png") no-repeat;
    background-size: contain;
    text-align: center;
  }

  .item .show-price {
    padding-top: 32px;
  }

  .item .show-date {
    padding-top: 10px;
  }

  .into-account {
    width: 142px;
    height: 42px;
    margin-top: 20px;
    background: url("../assets/buttonAccount.png") no-repeat;
    background-size: contain;
    display: inline-block;
  }
</style>
