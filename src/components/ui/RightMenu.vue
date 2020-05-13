<template>
  <div>
    <div class="block" style="width: 300px;margin-left: 50px;margin-bottom: 10px">
      <el-image :src="src"></el-image>
    </div>
    <el-input placeholder="根据关键字查文章" v-model="input3" class="input-with-select" style=" width: 300px;margin-left: 50px;margin-bottom: 10px">
      <el-button slot="append" icon="el-icon-search" ></el-button>
    </el-input>
    <hot-article></hot-article>
    <hot-tags></hot-tags>
  </div>
</template>
<script>
import HotTags from '../data/HotTags'
import HotArticle from '../data/HotArticle'
import jxlt from '../../assets/jxlt.jpg'
export default {
  components: {
    HotTags, HotArticle
  },
  data () {
    return {
      src: jxlt
    }
  }
}
</script>
<!--<style type="text/css" scoped>-->
<!--  .writer-list{-->
<!--    width: 300px;-->
<!--    margin-left: 50px;-->
<!--    font-size: 14px;-->
<!--  }-->
<!--  .text ul{-->
<!--    margin: 0;-->
<!--    padding: 0;-->
<!--    list-style: none;-->
<!--  }-->
<!--  .text ul li{-->
<!--    line-height: 35px;-->
<!--  }-->
<!--</style>-->
