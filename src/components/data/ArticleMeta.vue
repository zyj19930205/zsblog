<template>
  <div>
      <div class="author">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" style="width: 24px;height: 24px"></el-avatar>
       </div>
    <div class="small-meta" style="display: inline-block;padding-bottom: 5px;float: left" >{{mateInfo.nickname}}</div>
    <div class="tipInfo">
<!--      <div style="float: right" class="small-meta"><el-button size="mini"><span class="el-icon-caret-bottom"></span>反对<span style="margin-left: 5px">5</span></el-button></div>-->
      <div style="float: right" class="small-meta"><el-button size="mini" @click="zan()">赞<span style="margin-left: 5px">{{mateInfo.stars}}</span></el-button></div>
      <div style="float: right" class="small-meta"><el-button size="mini">评论<span style="margin-left: 5px">51</span></el-button></div>
<!--      <div style="float: right" class="small-meta"><i class="el-icon-milk-tea icon-style"></i>12</div>-->
    </div>
  </div>
</template>
<script>
export default {

  props: ['mateInfo'],
  data () {
    return {
      author: '邹宇杰',
      tips: 12,
      watchIt: 22
    }
  },
  methods: {
    zan () {
      this.axios.get('http://localhost:8081/addTip/' + this.mateInfo.id).then((response) => {
        this.mateInfo.stars++
      })
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
  .tipInfo{
    margin-right: 5px;
    float: right;
  }
</style>
