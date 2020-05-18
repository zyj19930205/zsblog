<template>
  <div class="articleListArea">
  <el-tabs type="border-card">
    <el-tab-pane label="看帖">
      <div class="articleList">
      <ul>
        <li v-for="article in articles">
          <div class="title">
            {{article.articleTitle}}
          </div>
          <div class="abstract">{{article.articleAbstract}}</div>

          <div class="ArticleMeta">
            <article-meta></article-meta>
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
      articles: [
        {
          id: 1,
          articleTitle: '今天中午吃啥呢',
          articleAbstract: '这是一个关于今天中午吃啥的帖子，纯属灌水，请勿回复',
          articleMeta: '无'
        },
        {
          id: 2,
          articleTitle: '邹宇杰的工作相关账号信息',
          articleAbstract: '堡垒机账号：******,号卡系统账号密码：**********,********',
          articleMeta: '无'
        },
        {
          id: 3,
          articleTitle: '今天中午吃啥呢',
          articleAbstract: '这是一个关于今天中午吃啥的帖子，纯属灌水，请勿回复',
          articleMeta: '无'
        },
        {
          id: 4,
          articleTitle: '今天中午吃啥呢',
          articleAbstract: '这是一个关于今天中午吃啥的帖子，纯属灌水，请勿回复',
          articleMeta: '无'
        },
        {
          id: 5,
          articleTitle: '今天中午吃啥呢',
          articleAbstract: '这是一个关于今天中午吃啥的帖子，纯属灌水，请勿回复',
          articleMeta: '无'
        }
      ]
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
</style>
