<template>
      <div class="loginbox" style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
        <div class="logo">
          <img :src="logo"/>
        </div>
        <div class="input-gr">
          <el-input placeholder="请输入内容" v-model="input1" prefix-icon="el-icon-user-solid" class="common-margin">
          </el-input>
          <el-input placeholder="请输入内容" v-model="input1" prefix-icon="el-icon-search" class="common-margin">
          </el-input>

          <div class="common-margin" style="font-size: 14px;">
            <el-checkbox v-model="value1">记住我</el-checkbox>
          </div>

          <div class="common-margin" style="text-align: center">
            <el-button type="primary">登了个录</el-button>
          </div>
        </div>
      </div>
</template>
<script>
import logo from '../assets/logo1.png'
export default {
  data () {
    return {
      logo: logo,
      value1: true
    }
  }
}
</script>
<style type="text/css" scoped>
  .loginbox{
    border-radius: 4px;
    width: 400px;
    background: #ffffff;
    margin: 50px auto;
    padding: 40px 40px 30px;
  }
  .logo{
    text-align: center;
  }
  .logo img{
    width: 260px;
    height: 60px;
    margin-top: 20px;
  }
  .input-gr{
    width: 300px;
    margin: 20px auto;
  }

  .common-margin{
    margin-top: 10px;
  }
</style>
