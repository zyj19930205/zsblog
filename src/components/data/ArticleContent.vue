<template>
  <div class="articleListArea">
  <el-tabs type="border-card">
    <el-tab-pane label="看帖">
      <div class="articleList">
        <div v-if="articles === null || articles.length===0">没有数据，服务器炸啦？</div>
      <ul>
        <li v-for="article in articles">
          <div class="title">
            <span v-if="article.stars > 25" class="bj">荐</span>
            {{article.title}}
          </div>
          <div class="abstract" @click="getArticle(article.id)">
            {{deleteHtmlTag(article.content)}}
          </div>

          <div class="ArticleMeta">
            <article-meta :mateInfo="article"></article-meta>
          </div>
          <el-divider></el-divider>
        </li>
      </ul>
    </div>
    </el-tab-pane>
    <el-tab-pane label="原创">
      <div class="articleList">
      <div v-if="ycarticles === null || ycarticles.length===0">没有数据，服务器炸啦？</div>
      <ul>
        <li v-for="article in ycarticles">
          <div class="title">
            <span v-if="article.stars > 25" class="bj">荐</span>
            {{article.title}}
          </div>
          <div class="abstract" @click="getArticle(article.id)">
            {{deleteHtmlTag(article.content)}}
          </div>

          <div class="ArticleMeta">
            <article-meta :mateInfo="article"></article-meta>
          </div>
          <el-divider></el-divider>
        </li>
      </ul>
    </div>
    </el-tab-pane>
    <el-tab-pane label="转载">角色管理</el-tab-pane>
    <el-tab-pane label="资源">定时任务补偿</el-tab-pane>
  </el-tabs>
    <div style="margin-top: 15px;text-align: center">
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :total="totalPage">
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
      articles: [],
      ycarticles: [],
      token: '',
      totalPage: 100
    }
  },
  created () {
    let token = localStorage.getItem('token')
    this.axios.get('http://localhost:8081/articleByPage', {
      headers: {
        'Authorization': token
      }
    }).then((response) => {
      console.log(response.data)
      this.articles = response.data.reverse()
      this.renderYcarticles()
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
    },
    handleCurrentChange (page) {
      this.axios.get('http://localhost:8081/articleByPage', {
        params: {
          page: page
        }
      }).then((response) => {
        console.log(response.data)
        this.articles = response.data.reverse()
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>
<style type="text/css" scope>
  .el-tabs--border-card>.el-tabs__header{
    background-color: #353b48 !important;
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
  .abstract{
    max-width: 800px;
    margin-top: 10px;
    text-indent:2em;
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
