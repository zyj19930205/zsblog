<template>
<el-container direction="vertical">
<header-nav></header-nav>
  <el-main>
          <el-row>
            <el-col :span="16"><article-content></article-content></el-col>
            <el-col :span="8"><right-menu></right-menu></el-col>
          </el-row>
  </el-main>
  </el-container>
</template>
<script>

import HeaderNav from '../components/ui/header'
import ContentArea from '../components/ui/ContentArea'
import ArticleContent from '../components/data/ArticleContent'
import RightMenu from '../components/ui/RightMenu'
export default {
  components: {
    HeaderNav, ContentArea, ArticleContent, RightMenu
  }
}
</script>
