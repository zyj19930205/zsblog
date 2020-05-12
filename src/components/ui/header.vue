<template>
  <el-header>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" class="logo">这里放logo拉</el-menu-item>
    <el-submenu index="3" class="tab">
      <template slot="title">我的工作台</template>
      <el-menu-item index="3-1">选项1</el-menu-item>
      <el-menu-item index="3-2">选项2</el-menu-item>
      <el-menu-item index="3-3">选项3</el-menu-item>
    </el-submenu>
        <el-menu-item index="2" class="tab">消息</el-menu-item>
        <el-menu-item index="3" class="tab">工具箱</el-menu-item>
        <el-menu-item index="4" class="tab">热点</el-menu-item>
  </el-menu>
  </el-header>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '2'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
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
</style>
