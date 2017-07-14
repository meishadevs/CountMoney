
<!-- 活动规则页 -->

<template>
  <div class="rule">
    <a class="into-index" href="#/"></a>
  </div>
</template>


<style scoped>
  .rule {
    width: 100%;
    height: 100%;
    background: url("../assets/bgRule.png") no-repeat;

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
    background: url("../assets/buttonReturn.png");
    display: inline-block;
    transform: scale(0.5);
    position: relative;
    top: 10px;
  }
</style>
