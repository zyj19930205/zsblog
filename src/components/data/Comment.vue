<template>
<div class="commentarea">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>评论区</span>
    </div>
    <div class="text item">
      <div class="commentlist">
        <div class="mycomment">
          <div style="flex: 1;line-height: 40px">我要评论：</div>
          <div style="flex: 9"><el-input v-model="mcomment" placeholder="请输入评论内容，注意用语文明哦~"></el-input></div>
          <div style="flex: 1;margin-left: 5px"> <el-button type="primary" plain @click="commitComment">提交</el-button></div>
        </div>
      <ul>
        <li v-for="(comment,index) in commentList" class="comment">
          <div class="user">
            {{comment.userName}}:<span>{{comment.content}}</span>
            <span  style="float:right">{{comment.commentDate}}</span>
          </div>
          <div class="comment_content"></div>
        </li>
      </ul>
      </div>
    </div>
  </el-card>
</div>
</template>
<script>
export default {
  props: ['articleId'],
  data () {
    return {
      commentList: [],
      mcomment: ''
    }
  },
  created () {
    this.axios.get('http://localhost:8081/comment/getComment/' + this.articleId, {
    }).then((response) => {
      console.log(response.data)
      this.commentList = response.data
    }).catch(function (err) {
      console.log(err)
    })
  },
  methods: {
    commitComment () {
      const that = this
      let newComment = {
        articleId: this.articleId,
        content: this.mcomment,
        userId: '1',
        commentDate: this.getToday()
      }
      console.log(newComment)
      this.axios.post('http://localhost:8081/comment/addcomment', this.article, {
        params: newComment,
        headers: {
          'content-type': 'application/json'
        }
      }).then(function (res) {
        that.commentList.push(newComment)
        alert('评论成功！')
        console.log(res)
      }).catch(function (err) {
        console.log(err)
      })
    },
    getToday () {
      let date = new Date() // 获取时间戳
      return date.toLocaleString() // 转成字符串 2016/12/21 09:09:10
    }
  }
}
</script>
<style scoped>
  .commentarea{
    width: 100%;
    margin: 20px auto;
    background-color: white;
    height: 50px;
  }
  .commentlist ul{
    list-style: none;
    padding: 0;
  }
  .comment{
    margin-top: 15px;
  }
  .comment_content{
    margin-top: 10px;
  }
  .comment span{
    font-size: 14px;
  }
  .mycomment{
    display: flex;
  }
</style>
