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
      default-active="1"
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
      <el-card class="box-card">
        <div class="mbx">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/manage/articleManage' }">文章管理</el-breadcrumb-item>
        </el-breadcrumb>
        </div>
        <div class="tabledata">
          <el-table
            :data="articles"
            border
            style="width: 100%">
            <el-table-column
              prop="title"
              label="标题">
            </el-table-column>
            <el-table-column
              prop="createDate"
              label="创建日期">
            </el-table-column>
            <el-table-column
              prop="tips"
              label="点击数">
            </el-table-column>
            <el-table-column
              prop="stars"
              label="星星">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
  </el-container>
</template>

<script>
import headerNav from '../../components/ui/header'
import logo from '../../assets/logo1.png'
export default {
  components: {
    headerNav
  },
  data () {
    return {
      articles: [],
      logo: logo
    }
  },
  created () {
    let token = localStorage.getItem('token')
    this.axios.get('http://localhost:8081/articles/1', {
      headers: {
        'Authorization': token
      }
    }).then((response) => {
      console.log(response.data)
      this.articles = response.data
    }).catch(function (err) {
      console.log(err)
    })
  },
  methods: {
    handleEdit (index, row) {
      this.$router.push({path: '/editArticle', query: { id: row.id}})
    },
    handleDelete (index, row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.axios.delete('http://localhost:8081/del/' + row.id).then((response) => {
          this.articles.splice(index, 1)
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    gotoManage () {
      this.$router.push('/manage/articleManage')
    },
    gotoUserInfo () {
      this.$router.push('/manage/userCenter')
    },
    gotoComment () {
      this.$router.push('/manage/CommentManage')
    }
  }
}
</script>
<style type="text/css" scoped>
  .el-container{
    height: 100%;
  }
  .el-menu-vertical-demo{
    border: none;
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
  .content{
    padding-top: 20px;
    padding-left: 220px;
    padding-right: 50px;
  }
  .tabledata{
    margin-top: 20px;
  }
  .el-header{
    padding: 0 !important;
  }
  .header{
    height: 60px;
    background-color: white;
    border-bottom: 1px solid #e6e6f2;
    box-shadow: 0px 0px 28px 0px rgba(82, 63, 105, 0.13);
    -webkit-transition: all 0.3s ease;
  }
  .header ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .logo{
    height: 60px;
    width: 200px;
  }
  .logo img{
    height: 30px;
    width: 135px;
    padding: 15px 25px;

  }
</style>
