<template>
  <div class="tag-list">
    <el-card class="box-card" shadow="always">
      <div slot="header" class="clearfix" style="color: crimson">
        <span>分类专栏</span>
        <el-button style="float: right; padding: 3px 0" type="text">换一批</el-button>
      </div>
      <div class="text item">
        <div class="tag-group">
          <el-tag
            size="mini"
            v-for="item in items"
            :key="item.label"
            :type="item.type"
            effect="dark">
            {{ item.label }}
          </el-tag>
        </div>
      </div>
    </el-card>
  </div>
</template>
<style type="text/css" scoped>
  .tag-list{
    margin-top: 10px;
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
    padding: 5px 10px;
  }
  .el-tag--mini{
    margin: 3px 3px !important;
  }
</style>
<script>
export default {
  data () {
    return {
      items: [
        { type: '', label: '工作' },
        { type: 'success', label: '吃货' },
        { type: 'info', label: '游戏' },
        { type: 'danger', label: '宠物' },
        { type: 'warning', label: '吹牛' },
        { type: 'warning', label: '工具' }
      ]
    }
  }
}
</script>
