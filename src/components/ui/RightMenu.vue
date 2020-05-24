<template>
  <div>
    <el-input placeholder="根据关键字查文章" v-model="input3" class="input-with-select" style=" width: 300px;margin-left: 20px;margin-bottom: 10px">
      <el-button slot="append" icon="el-icon-search" ></el-button>
    </el-input>

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
      src: jxlt
    }
  }
}
</script>
<style type="text/css">
  .el-input-group__append{
    background-color: #353b48 !important;
    color: #f5f6f7 !important;
  }
</style>
