<template>
  <div>
    <hot-article></hot-article>
    <hot-tags></hot-tags>
  </div>
</template>
<script>
import HotTags from '../data/HotTags'
import HotArticle from '../data/HotArticle'
export default {
  components: {
    HotTags, HotArticle
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
