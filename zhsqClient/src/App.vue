<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
    background-color: #000;
    overflow: hidden;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  #app {
    width: 440px;
    height: 100%;
    margin: 0 auto;
  }
</style>
