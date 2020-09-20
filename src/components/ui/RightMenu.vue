<template>
  <div>
    <el-input placeholder="根据关键字查文章" v-model="articleTitle" class="input-with-select" style=" width: 300px;margin-left: 20px;margin-bottom: 10px">
      <el-button slot="append" icon="el-icon-search" @click="selectArticleByTitle"></el-button>
    </el-input>
    <div v-show="ifserach">
      <div class="serach-resultinfo">
        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix" style="color: crimson">
            <span>查询结果</span>
          </div>
          <div>
            <ul>
              <li v-for="article in serachArticle">
                {{article.title}}<span style="float: right">{{article.authorName}}</span>
              </li>
            </ul>
          </div>
        </el-card>
      </div>
    </div>

    <user-info></user-info>
<!--    <div class="block" style="width: 300px;margin-left: 20px;margin-bottom: 10px">-->
<!--      <el-image :src="src"></el-image>-->
<!--    </div>-->
    <hot-article></hot-article>
    <hot-tags></hot-tags>
  </div>
</template>
<script>
import HotTags from '../data/HotTags'
import HotArticle from '../data/HotArticle'
import jxlt from '../../assets/jxlt.jpg'
import userInfo from '../ui/UserInfo'
export default {
  components: {
    HotTags, HotArticle, userInfo
  },
  data () {
    return {
      src: jxlt,
      articleTitle: '',
      ifserach: false,
      serachArticle: []
    }
  },
  methods: {
    selectArticleByTitle () {
      let that = this
      this.axios.post('http://localhost:8081/getArticlesByContent/' + this.articleTitle, this.article, {
        headers: {
          'content-type': 'application/json'
        }
      }).then(function (res) {
        that.serachArticle = res.data
        that.ifserach = true
        console.log(res.data)
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>
<style type="text/css">
  .el-input-group__append{
    background-color: #353b48 !important;
    color: #f5f6f7 !important;
  }
  .serach-resultinfo{
    margin-bottom: 20px;
    width: 300px;
    margin-left: 20px;
    font-size: 14px;
  }
  .serach-resultinfo ul{
    list-style: none;
    padding: 0;
  }
</style>
