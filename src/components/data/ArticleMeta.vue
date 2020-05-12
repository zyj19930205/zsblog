<template>
    <ul>
      <li> <i class="el-icon-user-solid icon-style"></i>{{author}}</li>
      <li><i class="el-icon-chat-round icon-style"></i>{{tips}}</li>
      <li><i  class="el-icon-star-on icon-style"></i>{{watchIt}}</li>
    </ul>
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
  ul li{
    font-size: 13px;
    float: left;
    padding-right: 10px;
    /*margin-left: 10px;*/
  }
  ul{
    margin: 0;
    padding: 0;
    height: 20px;
    list-style: none;
  }
  .icon-style{
    font-size: 15px;
    padding-right: 3px;
  }
</style>
