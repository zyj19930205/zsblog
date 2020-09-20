<template>
  <el-container direction="vertical">
    <el-row>
      <el-col :xs="{span:24,offset:0}" :xl="{span:24,offset:0}">
        <div class="headNav" style="border-bottom: solid 1px #e6e6e6;background-color: #ffffff">
          <headerNav></headerNav>
        </div>
      </el-col>
    </el-row>
    <div class="leftNav">
      <div style="height: 50px;width: 100%;background-color: #353b48;color: white;line-height: 48px;font-size: 12px;text-align: center">为了更美好的明天~</div>
      <el-menu
        default-active="3"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title" @click="gotoManage">文章管理</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title" @click="gotoComment">评论管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title" @click="gotoUserInfo">个人信息</span>
        </el-menu-item>
      </el-menu></div>
    <div class="content">
      <div class="userinfoBox">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>我的名字</span>
          </div>
          <div  class="text item">
            <div class="boxstyle"><img :src="userImg">
            <p>你的名字是：<span class="importantInfo">邹大仙</span></p>
              <p>你拥有<span class="importantInfo">699</span>个忠实粉丝！</p>
            </div>
          </div>
        </el-card>
      </div>
      <div class="userinfoBox">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>我的文章</span>
          </div>
          <div class="text item">
            <div class="boxstyle">
            <p>你已经发表了<span class="importantInfo">{{articleNum}}</span>篇文章</p>
            <p>有<span class="importantInfo">2</span>篇文章获得了超高的点赞数！</p>
            </div>
          </div>
        </el-card>
      </div>
      <div class="userinfoBox">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>我的好友</span>
          </div>
          <div class="text item">
            <div class="boxstyle">
              <p>你的好友还很少哦~</p>
              <p>目前有0位好友，请继续努力</p>
            </div>
          </div>
        </el-card>
      </div>
      <div class="userinfoBox">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>我的画像</span>
          </div>
          <div class="text item">
            <div class="boxstyle">
              <p>你发布的文章中，有<span class="importantInfo">100%</span>的原创内容！</p>
              <p>你发布的文章中，有<span class="importantInfo">70%</span>的内容为<el-tag type="danger" style="margin: 0 5px">工作</el-tag>,有30%的内容为<el-tag type="danger" style="margin: 0 5px">学习</el-tag></p>
            </div>
          </div>
        </el-card>
      </div>
      <div class="userinfoBox">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>密码修改</span>
          </div>
          <div class="text item">
            <div class="boxstyle">
              <p><el-input placeholder="请输入原本的密码" label="原密码" v-model="input1"></el-input></p>
              <p><el-input placeholder="请输入新密码！" v-model="newpsd"></el-input></p>
              <p><el-input placeholder="请再输入一次新密码！" v-model="input2"></el-input></p>
              <el-button type="primary" round @click="changePsd">确认修改</el-button>
              <el-button type="primary" round>重置</el-button>
            </div>
          </div>
        </el-card>
      </div>
    </div>

  </el-container>
</template>
<script>
import headerNav from '../../components/ui/header'
import tx from '../../assets/xj.png'
export default {
  components: {
    headerNav
  },
  data () {
    return {
      userImg: tx,
      articleNum: '',
      newpsd: '',
      input1: '',
      input2: '',
      user: {
        id: '',
        username: '',
        password: '',
        nickName: '',
        fansnum: ''
      }
    }
  },
  created () {
    this.axios.get('http://localhost:8081/articleNum/1', {
    }).then((response) => {
      this.articleNum = response.data
    }).catch(function (err) {
      console.log(err)
    })
  },
  methods: {
    gotoManage () {
      this.$router.push('/manage/articleManage')
    },
    gotoUserInfo () {
      this.$router.push('/manage/userCenter')
    },
    gotoComment () {
      this.$router.push('/manage/CommentManage')
    },
    changePsd () {
      let that = this
      this.axios.post('http://localhost:8081/changePwd', this.user, {
        params: {
          id: 1,
          username: 'qwe1234rt',
          password: that.newpsd,
          nickName: '邹大仙',
          fansnum: '699'
        }
      }).then((response) => {
        that.$message({
          type: 'success',
          message: '修改成功！!'
        })
        sessionStorage.clear()
        that.$router.push('/login')
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
  .content{
    padding-top: 20px;
    padding-left: 220px;
    padding-right: 50px;
    display: flex;
    flex-wrap: wrap;
  }
  .userinfoBox{
    width: 500px;
    height: 320px;
    margin-top: 5px;
  }
  .leftNav{
    width: 200px;
    height: 800px;
    background: white;
    position: absolute;
    left: 0;
    top:61px;
    bottom: 0;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
  .boxstyle{
    height: 180px;
    text-align: center;
  }
  .boxstyle img{
    border-radius: 15px;
  }
  .importantInfo{
    font-size: 18px;
    color: #353b48;
    font-weight: bold;
  }
</style>
