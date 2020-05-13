<template>
  <div>
      <div class="author">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" style="width: 24px;height: 24px"></el-avatar>
       </div>
    <div class="tipInfo">
      <div class="small-meta" style="float: left">{{author}}</div>
      <div style="float: right" class="small-meta"><i  class="el-icon-star-on icon-style"></i>{{watchIt}} </div>
      <div style="float: right" class="small-meta"><i class="el-icon-chat-round icon-style"></i>{{tips}}</div>
      <div style="float: right" class="small-meta"><i class="el-icon-milk-tea icon-style"></i>12</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      author: '邹宇杰',
      tips: 12,
      watchIt: 22
    }
  }
}
</script>
<style type="text/css" scoped>
  .authorName{
    height: 24px;
  }
  ul li{
    font-size: 13px;
    float: left;
    margin: 0;
    padding: 0;
    /*margin-left: 10px;*/
  }
  ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .icon-style{
    font-size: 15px;
    padding-right: 3px;
  }
  .author{
    float: left;
    height: 24px;
  }
  .small-meta{
    padding: 0 5px;
  }
  .writer{
  }

</style>
