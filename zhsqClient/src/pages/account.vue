
<!-- 我的账户页 -->

<template>
  <div class="account">
    <div class="title"></div>
    <ul class="list-item">
      <li class="item" v-for="card in filterCard" v-if="totalCard > 0">
        <p class="show-price">{{ '您获得了一张 ' + card.money + ' 元的现金券' }}</p>
        <p class="show-date">{{ '现金券仅限' + card.year + '年' + card.month + '月' + card.day + '日当天使用' }}</p>
      </li>
    </ul>
    <div class="show-page" v-if="cardNum != ''">{{ '第 ' + curPage + ' / ' + totalPage + '页' }}</div>
    <router-link class="into-index" to="/"></router-link>

    <!-- 翻页按钮 s -->
    <div class="rate-page" v-if="cardNum != ''">
      <div class="page-prev" v-if="curPage != 1" @click="pageUp()"></div>
      <div class="page-next" v-if="curPage != totalPage" @click="pageDown()"></div>
    </div>
    <!-- 翻页按钮 e -->

    <div class="show-cardnum" v-if="cardNum != ''">{{ '您的信用卡号后8位为 ' + cardNum }}</div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    data() {
      return {

        //保存用户获得的优惠券信息
        arrayCard: [],

        //一共有totalPage页
        totalPage: 0,

        //当前展示的是第curPage页
        curPage: 1,

        //限制每页展示4张优惠券
        limitNum: 4,

        //一共有totalCard张优惠券
        totalCard: 0,

        //每页第1条优惠券在数组中的的下标
        firstIndex: 0
      };
    },

    //初始化
    mounted() {
      this.$nextTick(() => {

        if (this.cardNum === null || this.cardNum === '') {
            return;
        }

        this.getCardToServer();
      });
    },

    //计算属性
    computed: {

      ...mapState([
          'cardNum'
      ]),

      filterCard() {

          //每页第1条优惠券的下标 = 当前展示的优惠券所在页数 * 每页展示的优惠券条数 - 每页展示的优惠券条数
          this.firstIndex = this.curPage * this.limitNum - this.limitNum;
          return this.arrayCard.slice(this.firstIndex, this.firstIndex + this.limitNum);
      }
    },

    //回调函数
    methods: {

      getCardToServer() {

        //使用axios发送get请求
        this.axios.get(this.getCardUrl, {
          params: {
            cardnum: this.cardNum
          }
        })
          .then(response => {

              //获得用户所有的优惠券
              this.arrayCard = response.data;

              //获得优惠券的数量
              this.totalCard = this.arrayCard.length;

            //计算优惠券需要多少页展示
            this.totalPage = Math.ceil(this.totalCard / this.limitNum);
          })
          .catch(error => {
            console.log(error);
          });
      },

      //上一页
      pageUp() {
          this.curPage--;
      },

      //下一页
      pageDown() {
          this.curPage++;
      }
    }
  };
</script>


<style scoped>
  .account {
    width: 100%;
    height: 100%;
    background: url("../../static/images/bg.png");
    background-repeat: no-repeat;

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

  .title {
    width: 135px;
    height: 50px;
    margin-top: 60px;
    background: url("../../static/images/account.png") no-repeat;
    background-size: contain;
  }

  .list-item {
    height: 448px;
    margin-top: 4px;
  }

  .list-item .item {
    width: 300px;
    height: 102px;
    margin-bottom: 10px;
    background: url('../../static/images/item.png') no-repeat;
    background-size: contain;
    text-align: center;
  }

  .list-item .show-date,
  .list-item .show-price {
    font-family: '宋体', 'SimSun';
    font-weight: bold;
    font-size: 18px;
  }

  .list-item .show-price {
    padding-top: 15px;
  }

  .list-item .show-date {
    padding-top: 10px;
  }

  .show-page {
    margin-bottom: 10px;
    font-weight: bold;
  }

  .into-index {
    width: 100px;
    height: 44px;
    background: url("../../static/images/buttonReturn.png") no-repeat;
    background-size: contain;
    display: inline-block;
  }

  .rate-page {
    width: 100%;
    position: absolute;
    left: 0;
    top: 246px;
  }

  .rate-page .page-prev,
  .rate-page .page-next {
    width: 30px;
    height: 51px;
    background-size: contain;
    cursor: pointer;
  }

  /* 上一页 */
  .page-prev {
    margin-left: 20px;
    background: url("../../static/images/btn_arrow_l.png") no-repeat;
    float: left;
  }

  .page-prev:active {
    background: url("../../static/images/btn_arrow_l_2.png") no-repeat;
    background-size: contain;
  }

  /* 下一页 */
  .page-next {
    margin-right: 20px;
    background: url("../../static/images/btn_arrow_r.png") no-repeat;
    float: right;
  }

  .page-next:active {
    background: url("../../static/images/btn_arrow_r_2.png") no-repeat;
    background-size: contain;
  }

  .show-cardnum {
    margin-top: 10px;
    margin-left: -186px;
    font-weight: bold;
    font-size: 18px;
  }
</style>
