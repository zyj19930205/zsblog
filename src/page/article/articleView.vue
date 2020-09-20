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
        <el-col :span="14" offset="2">
          <el-card class="box-card" shadow="always">
          <div class="article">
            <div class="title">{{title}}</div>
            <div class="authorInfo">
              <span class="tags">原创</span>
              <span>{{authorInfo.authorName}}</span>
              <span style="float: right;padding-right: 10px;padding-top: 2px">
                <i class="el-icon-edit" style="margin-right: 3px"></i>
                <span style="font-style: italic">2020-05-10</span>
              </span>
              <div class="info">
<!--              <span class="el-icon-star-on">{{authorInfo.star}}</span>-->
              </div>
            </div>
            <div class="content" v-html="content">
            </div>
          </div>
          </el-card>
          <Comment :articleId="aid"></Comment>
        </el-col>
        <el-col :span="8" ><right-menu></right-menu></el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import headerNav from '../../components/ui/header'
import rightMenu from '../../components/ui/RightMenu'
import Comment from '../../components/data/Comment'
export default {
  components: {
    headerNav, rightMenu, Comment
  },
  data () {
    return {
      title: '',
      content: '',
      aid: '',
      authorInfo: {
        authorName: '',
        star: 12
      }
    }
  },
  created () {
    this.aid = this.$route.query.id
    this.axios.get('http://localhost:8081/article/' + this.aid).then((response) => {
      this.title = response.data.title
      this.content = response.data.content
      this.authorInfo.authorName = response.data.nickname
    }).catch(function (err) {
      console.log(err)
    })
  }
}
</script>
<style type="text/css">
  .article{
    min-height: 700px;
  }
  .article .title{
    font-size: 24px;
    font-weight: bold;
  }
  .authorInfo{
    background-color: #f7f5f5;
    margin-top: 10px;
    font-size: 14px;
    height: 33px;
    padding-top: 10px;
  }
  .content{
    margin-top: 20px;
    line-height: 25px;
    font-size: 15px;
  }
  .el-menu.el-menu--horizontal{
    border-bottom: 0;
  }
  .el-menu-demo{
    margin: 0 auto;
    width:1366px ;
  }
  .tags{
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
    padding:2px;
    margin-left: 10px;
  }
  .info{
    float: right;
  }
</style>
