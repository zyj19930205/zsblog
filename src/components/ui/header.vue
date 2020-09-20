<template>

  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" class="logo"><img :src="logo" style="width: 135px;height: 30px"></el-menu-item>
    <el-menu-item index="5" style="color:#c23616;"><a href="/">
      <span class="el-icon-discover"></span><span style="line-height: 24px">主页</span></a></el-menu-item>
    <el-submenu index="3" class="tab">
      <template slot="title">我的工作台</template>
      <el-menu-item index="3-1">选项1</el-menu-item>
      <el-menu-item index="3-2">选项2</el-menu-item>
      <el-menu-item index="3-3">选项3</el-menu-item>
    </el-submenu>
        <el-menu-item index="2" class="tab">消息</el-menu-item>
        <el-menu-item index="3" class="tab">工具箱</el-menu-item>
        <el-menu-item index="4" class="tab">热点</el-menu-item>
        <el-menu-item  class="tab"> <el-button type="danger" @click="writeArticle" size="small">写文章</el-button></el-menu-item>
  </el-menu>

</template>
<script>
import logo from '../../assets/logo1.png'
export default {
  data () {
    return {
      logo: logo,
      activeIndex: '2'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    writeArticle () {
      this.$router.push('addArticle')
    }
  }
}
</script>
<style type="text/css">
  .indexPage{
    display: inline-block;
    height: 60px;
    width: 72px;
  }
  .el-link [class*=el-icon-]+span {
     margin-left: 0px !important;
  }
  .indexPage span{
    margin: 20px;
  }
  .el-menu-demo{
    margin: 0 auto;
    width:1366px ;
  }
  .logo{
    margin-right: 50px;
  }
.el-menu-item a{
  text-decoration: none;
}
.tab{
  float: right !important;
}
  .el-menu-demo .el-menu-item{
    font-size: 16px !important;
  }
  .el-header{
    padding: 0 !important;
  }
  .el-button--danger{
   background: #c23616 !important;
    border: #c23616 !important;
  }
</style>
