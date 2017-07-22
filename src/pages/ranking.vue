
<!-- 排行榜页 -->

<template>
  <div class="ranking">
    <ul class="ranking-list">
      <li class="item" v-for="(ranking, index) in formatRankingList">
        {{ index + 1 + ' ' + '信用卡号后8位 ' + ranking.cardNum + ' 张数 ' + ranking.numMoney }}
      </li>
    </ul>
    <a class="into-index" href="#/"></a>
  </div>
</template>


<script>
  module.exports = {
    data: function () {
      return {
          rankingList: []
      }
    },

    //初始化
    mounted: function () {
      this.$nextTick(function () {
          this.getRankingList();
      })
    },

    computed: {

      formatRankingList: function () {

          for (var i = 0; i < this.rankingList.length; i++) {

              //对信用卡账号加密
              this.rankingList[i].cardNum = this.rankingList[i].cardNum.split('').splice(0, 3).join('') + '***' +  this.rankingList[i].cardNum.split('').splice(6, 2).join('');
          }

          return this.rankingList;
      }
    },

    //回调函数
    methods: {

        getRankingList: function () {

          //使用axios发送get请求
          this.axios.get(this.getRankingListUrl, {
          })
            .then(response => {
                this.rankingList = response.data;
            })
            .catch(error => {
              console.log(error);
            });
        }
    }
  }
</script>


<style scoped>
  .ranking {
    width: 100%;
    height: 100%;
    background: url("../assets/bgRanking.png") no-repeat;

    /* 使用弹性布局 */
    display: flex;

    /* 主轴的方向为竖直方向 */
    flex-direction: column;

    /* 标签在主轴上的对齐方式为左对齐 */
    justify-content: flex-start;

    /* 标签在侧轴上的对齐方式为居中对齐 */
    align-items: center;
  }

  .ranking-list {
    margin-top: 173px;
  }

  .ranking-list .item {
    height: 36px;
    font: bold 16px/36px '宋体', 'SimSun';
    text-align: right;
  }

  .into-index {
    width: 114px;
    height: 50px;
    margin-top: 36px;
    background: url("../assets/buttonReturn.png") no-repeat;
    background-size: contain;
    display: inline-block;
  }
</style>
