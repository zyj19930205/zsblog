<template>
  <el-container direction="vertical">
  <el-row>
    <el-col :xs="{span:24,offset:0}" :xl="{span:24,offset:0}">
      <div class="headNav" style="border-bottom: solid 1px #e6e6e6;background-color: #ffffff">
        <headerNav></headerNav>
      </div>
    </el-col>
  </el-row>
    <el-main>
            <el-row>
              <el-col :span="14" offset="2"><article-content></article-content></el-col>
              <el-col :span="8"><right-menu></right-menu>

              </el-col>

            </el-row>
    </el-main>
  </el-container>
</template>
<script>
import headerNav from '../components/ui/header'
import ContentArea from '../components/ui/ContentArea'
import ArticleContent from '../components/data/ArticleContent'
import RightMenu from '../components/ui/RightMenu'
export default {
  components: {
    headerNav, ContentArea, ArticleContent, RightMenu
  }
}
</script>
<style>
  .el-menu.el-menu--horizontal{
    border-bottom: 0;
  }
  .el-menu-demo{
    margin: 0 auto;
    width:1366px ;
  }
</style>
