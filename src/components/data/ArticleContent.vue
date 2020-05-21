<template>
  <div class="articleListArea">
  <el-tabs type="border-card">
    <el-tab-pane label="看帖">
      <div class="articleList">
      <ul>
        <li v-for="article in articles">
          <div class="title">
            <span v-if="article.recommend" class="bj">荐</span>
            {{article.title}}
          </div>
          <div class="abstract" @click="getArticle(article.id)">
            {{deleteHtmlTag(article.content)}}
          </div>

          <div class="ArticleMeta">
            <article-meta :authorName="article.nickname"></article-meta>
          </div>
          <el-divider></el-divider>
        </li>
      </ul>
    </div>
    </el-tab-pane>
    <el-tab-pane label="热点">配置管理</el-tab-pane>
    <el-tab-pane label="精品">角色管理</el-tab-pane>
    <el-tab-pane label="吃货">定时任务补偿</el-tab-pane>
  </el-tabs>
    <div style="margin-top: 15px;text-align: center">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
    </div>
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
      articles: []
    }
  },
  created () {
    this.axios.get('http://localhost:8081/article').then((response) => {
      console.log(response.data)
      this.articles = response.data
    }).catch(function (err) {
      console.log(err)
    })
  },
  methods: {
    deleteHtmlTag (str) {
      if (str.length > 100) {
        return str.replace(/<[^>]+>/g, '').substring(0, 100) + '.....'
      }
      return str.replace(/<[^>]+>/g, '')
    },
    getArticle (id) {
      this.$router.push({
        path: '/articleView',
        query: {
          id: id
        }
      })
    }
  }
}
</script>
<style type="text/css" scope>
  .el-tabs--border-card>.el-tabs__header{
    background-color: black !important;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item{
    color: white !important;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color: black !important;
    font-weight: bold;
  }
  .articleList{
    margin-top: 10px;
  }
  .articleList ul li{
    list-style: none;
    padding: 10px;
  }
  .title{
    font-size: 18px;
    font-weight: 700;
  }
  .abstract,.ArticleMeta{
    font-size: 14px;
    color: #999999;
  }
  .ArticleMeta{
    margin-top: 10px;
    height: 26px;
    line-height: 27px;
  }
  .el-divider--horizontal{
    margin:15px 0 !important;
  }
  .bj{
    display: inline-block;
    width: 24px;
    height: 23px;
    border-radius: 4px;
    border: 1px solid #ca0c16;
    font-size: 14px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-weight: 500;
    text-align: center;
    color: #ca0c16;
    line-height: 23px;
    margin-right: 4px;
  }
  .abstract {
    cursor: pointer;
  }
</style>
