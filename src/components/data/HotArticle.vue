<template>
  <div class="writer-list">
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix" style="color: crimson">
        <span>最热文章</span>
        <el-button style="float: right; padding: 3px 0" type="text">换一批</el-button>
      </div>
      <div class="text item">
        <ul class="hotArticleList">
          <li>5月12日-5月14日食堂菜单</li>
          <li>深入理解JVM虚拟机小赏</li>
          <li>如何使用蔡文姬杀猪？</li>
          <li>泡芙的猫粮快吃完了</li>
          <li>今晚去天虹shopping</li>
        </ul>
      </div>
    </el-card>
  </div>
</template>
<style type="text/css" scoped>
  .writer-list{
    width: 300px;
    margin-left: 50px;
    font-size: 14px;
  }
  .text ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .text ul li{
    line-height: 35px;
  }
</style>
