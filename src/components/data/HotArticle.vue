<template>
  <transition name="el-zoom-in-bottom" >
  <div class="writer-list" v-show="show2">
    <el-card class="box-card" shadow="always" >
      <div slot="header" class="clearfix" style="color: crimson">
        <span>最热文章</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="hyp">换一批</el-button>
      </div>
      <div class="text item">
        <ul class="hotArticleList">
          <li v-for="hot in hotart">
            <span v-if="hot.title.length < 10"> {{hot.title}}</span>
            <span v-else> {{hot.title.slice(0,25)}}...</span>
          </li>
<!--          <li>5月12日-5月14日食堂菜单</li>-->
<!--          <li>深入理解JVM虚拟机小赏</li>-->
<!--          <li>如何使用蔡文姬杀猪？</li>-->
<!--          <li>泡芙的猫粮快吃完了</li>-->
<!--          <li>今晚去天虹shopping</li>-->
        </ul>
      </div>
    </el-card>
    </div>
  </transition>
</template>
<script>
export default {
  data: () => ({
    show2: true,
    hotart: []
  }),
  created () {
    this.axios.get('http://localhost:8081/hotArticle', {
    }).then((response) => {
      console.log(response.data)
      this.hotart = response.data
    }).catch(function (err) {
      console.log(err)
    })
  },
  methods: {
    hyp () {
      this.show2 = false
      setTimeout(() => {
        this.show2 = true
      }, 500)
    }
  }
}
</script>
<style type="text/css" scoped>
  .writer-list{
    width: 300px;
    margin-left: 20px;
    font-size: 14px;
  }
  .text ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .text ul li{
    line-height: 35px;
  }
</style>
