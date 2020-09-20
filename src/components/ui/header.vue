<template>

  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" class="logo"><router-link to="/"><img :src="logo" style="width: 140px;height: 50px" /></router-link> </el-menu-item>
    <el-menu-item index="4" class="tab" @click="logout"><span style="color: #c23616">退出</span></el-menu-item>
    <el-menu-item index="5" class="tab" @click="manage">我的工作台</el-menu-item>
        <el-menu-item index="3" class="tab">工具箱</el-menu-item>
        <el-menu-item  class="tab"> <el-button type="danger" @click="writeArticle" size="small">写文章</el-button></el-menu-item>

  </el-menu>

</template>
<script>
import logo from '../../assets/logo3.jpg'
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
    },
    manage () {
      this.$router.push('/manage/articleManage')
    },
    logout () {
      sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style type="text/css">
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
