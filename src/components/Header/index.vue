<template>
  <div class="header">
    <div class="left">
      <router-link to='/'>返回</router-link>
    </div>
    <div class="middle">
      <router-link :to="{name: 'my-music'}">
        <span>A</span>
      </router-link>
      <router-link :to="{name: 'online-music'}">
        <span>B</span>
      </router-link>
      <router-link :to="{name: 'topic'}">
        <span>C</span>
      </router-link>
    </div>
    <div class="right">搜索</div>
  </div>
</template>

<style lang="less" scoped>
  .header {
    background: #26a2ff;
    height: 4rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 4rem;
  }
  .left, .right {
    width: 20%;
    text-align: center;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  .middle {
    float: left;
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
