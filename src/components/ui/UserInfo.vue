<template>
    <div class="user-info">
      <el-card class="box-card" shadow="always">
        <div slot="header" class="clearfix" style="color: crimson">
          <span>用户信息</span>
        </div>
        <div style="text-align: center">
          <img :src="userImg"  style="width:70px; height:70px; border-radius:50%"/>
        </div>
        <div style="text-align: center;margin-top: 20px">{{loginInfo}}</div>
        <div style="text-align: center;margin-top: 20px;" v-show="this.showdetail">您已经发布了总共<span style="margin: 0 2px;color: red">{{articleNum}}</span>篇文章</div>
      <div>
      </div>
      </el-card>
    </div>
</template>
<script>
import jxlt from '../../assets/jxlt.jpg'
export default {
  data () {
    return {
      username: '',
      userpwd: '',
      loginStatus: 0,
      loginInfo: '',
      userImg: jxlt,
      articleNum: '',
      showdetail: false
    }
  },
  mounted () {
    if (sessionStorage.getItem('token') === null) {
      this.loginInfo = '未登录，登录查看更多精彩内容'
    } else {
      this.getArticleNum(1)
      this.loginInfo = '欢迎您,邹大仙'
      this.showdetail = true
    }
  },
  methods: {
    getArticleNum (id) {
      this.axios.get('http://localhost:8081/articleNum/' + id, {
      }).then((response) => {
        this.articleNum = response.data
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
.user-info{
  margin-bottom: 20px;
  width: 300px;
  margin-left: 20px;
  font-size: 14px;
}
</style>
