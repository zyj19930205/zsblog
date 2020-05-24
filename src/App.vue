<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body,#app{
    margin: 0;
    padding: 0;
    background-color: #f5f6f7;
  }
  .el-card__header{
    background: #353b48;
  }
  .el-card__header .clearfix span{
    color: white;
  }
</style>
