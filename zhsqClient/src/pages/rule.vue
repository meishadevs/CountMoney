
<!-- 活动规则页 -->

<template>
  <div class="rule">
    <router-link class="into-index" to="/"></router-link>
  </div>
</template>


<script>
</script>


<style scoped>
  .rule {
    width: 100%;
    height: 100%;
    background: url("../../static/images/bgRule.png") no-repeat;

    /* 使用弹性布局 */
    display: flex;

    /* 标签在主轴上居中对齐 */
    justify-content: center;

    /* 标签在侧轴上底对齐 */
    align-items: flex-end;
  }

  .into-index {
    width: 202px;
    height: 90px;
    background: url("../../static/images/buttonReturn.png") no-repeat;
    display: inline-block;
    transform: scale(0.5);
    position: relative;
    top: 10px;
  }
</style>
