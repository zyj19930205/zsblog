<template>
  <div class="articleList">
    <ul>
      <li>
    <div class="title">
      {{articleTitle}}
    </div>
    <div class="abstract">{{articleAbstract}}</div>
    <div class="ArticleMeta">
      <article-meta></article-meta>
    </div>
    <el-divider></el-divider>
      </li>
    </ul>
  </div>

</template>
<script>
import ArticleMeta from './ArticleMeta'
export default {
  components: {
    ArticleMeta
  },
  data () {
    return {
      articleTitle: '今天中午吃啥呢',
      articleAbstract: '这是一个关于今天中午吃啥的帖子，纯属灌水，请勿回复',
      articleMeta: '无'
    }
  }
}
</script>
<style type="text/css" scope>
  .articleList{
    margin-top: 10px;
  }
  .articleList ul li{
    list-style: none;
  }
  .title{
    font-size: 18px;
    font-weight: 700;
  }
  .abstract,.ArticleMeta{
    font-size: 14px;
    color: #999999;
    margin-top: 20px;
  }

</style>
