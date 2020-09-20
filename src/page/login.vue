<template>
      <div class="loginbox" style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
        <div class="logo">
          <img :src="logo" style="width: 150px;height: 60px"/>
        </div>
        <div class="input-gr">
          <el-input placeholder="请输入内容" v-model="username" prefix-icon="el-icon-user-solid" class="common-margin zyjinput">
          </el-input>
          <el-input placeholder="请输入内容" v-model="password" prefix-icon="el-icon-search" class="common-margin zyjinput">
          </el-input>

          <div class="common-margin" style="font-size: 14px;">
            <el-checkbox v-model="rememberMe">记住我</el-checkbox>
          </div>

          <div class="common-margin" style="text-align: center">
            <el-button type="primary" @click="login">登了个录</el-button>
          </div>
          <span style="font-size: 10px"> {{loginInfo}}</span>
        </div>
      </div>
</template>
<script>
import logo from '../assets/logo3.jpg'
export default {
  data () {
    return {
      logo: logo,
      rememberMe: true,
      username: '',
      password: '',
      loginInfo: ''
    }
  },
  methods: {
    login () {
      let that = this
      let params = new URLSearchParams()
      params.append('username', this.username)
      params.append('password', this.password)
      params.append('rememberme', this.rememberMe)
      this.axios.post('http://localhost:8081/login', params).then((response) => {
        if (response.data.code === 1) {
          let storage = window.sessionStorage
          storage['token'] = response.data.token
          this.$router.push({path: '/', query: {user: this.username, pwd: this.password}})
        } else {
          that.$message({
            type: 'error',
            message: '用户名或密码错误！!'
          })
        }
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
  .loginbox{
    border-radius: 4px;
    width: 400px;
    height: 400px;
    background: #ffffff;
    margin: 100px auto;
    padding: 40px 40px 30px;
  }
  .loginbox .logo{
    text-align: center;
  }
  .loginbox .logo img{
    width: 260px;
    height: 60px;
    margin-top: 20px;
  }
  .loginbox .input-gr{
    width: 300px;
    margin: 20px auto;
  }

  .common-margin{
    margin-top: 10px;
  }
  .el-button--primary{
    background: #353b48 !important;
    border: #353b48 !important;
  }
  .el-input__inner{
    border-radius: 0 !important;
  }

</style>
