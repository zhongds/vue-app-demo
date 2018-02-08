<template>
  <div class="header">
    <div class="left">返回</div>
    <div class="middle">
      <router-link>
        <span>A</span>        
      </router-link>
      <router-link>
        <span>B</span>        
      </router-link>
      <router-link>
        <span>C</span>        
      </router-link>
    </div>
    <div class="right">搜索</div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

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
