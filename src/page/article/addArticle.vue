<template>



  <el-container direction="vertical">
    <el-row>
      <el-col :xs="{span:24,offset:0}" :xl="{span:24,offset:0}">
        <div class="headNav" style="border-bottom: solid 1px #e6e6e6;background-color: #ffffff">
          <headerNav></headerNav>
        </div>

        <el-dialog
          title="标签选择"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
              <el-input
                placeholder="请输入标签名进行搜索哦~"
                v-model="article.title"
                clearable>
            </el-input>
          <div id="tablist">
            <div class="tabitme"><el-button type="info" plain size="mini" @click="bb">游戏</el-button></div>
            <div class="tabitme"><el-button type="info" plain size="mini">学习</el-button></div>
            <div class="tabitme"><el-button type="info" plain size="mini">生活</el-button></div>
            <div class="tabitme"><el-button type="info" plain size="mini">无敌</el-button></div>
          </div>
            <div style="margin-top: 20px">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </div>
  </span>
        </el-dialog>

      </el-col>
    </el-row>
    <el-main>
      <el-row>
        <el-col :span="18" offset="3">
          <el-card class="box-card" shadow="never" style="height: 900px">
            <el-input
              placeholder="请输入文章标题"
              v-model="article.title"
              clearable>
            </el-input>
            <div class="article-write-box" style="height: 650px;margin-top: 20px">
            <quill-editor ref="myTextEditor" v-model="content" :options="editorOption" style="height:600px;"></quill-editor>
            </div>
            <div class="article-type-select">
              文章类型：
              <el-select v-model="value" placeholder="请选择"  size="small" >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <span class="bz">*原创的文章享有版权保护，请勿将复制黏贴来的知识作为原创！</span>
            </div>

            <div style="margin-top: 20px">
              文章标签：<el-button size="mini" @click="dialogVisible = true">添加标签<i class="el-icon-plus el-icon--right"></i></el-button>
              {{tags}}
            </div>
            <div style="margin-top: 20px"><el-button type="danger" @click="commitArticle">提交文章</el-button></div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>

</template>
<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import headerNav from '../../components/ui/header'

export default {
  data () {
    return {
      content: `<p></p><p><br></p><ol></ol>`,
      editorOption: {
        placeholder: '编辑文章内容',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike', {'font': []}],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }]
          ]
        }
      },
      article: {
        title: '',
        articleContent: '',
        authorId: ''
      },
      options: [{
        value: '选项1',
        label: '工作'
      }, {
        value: '选项2',
        label: '生活'
      }, {
        value: '选项3',
        label: '学习'
      }, {
        value: '选项4',
        label: '其他'
      }],
      value: '',
      visible: false,
      dialogVisible: false,
      tags: []
    }
  },
  components: {
    quillEditor, headerNav
  },
  methods: {
    onEditorChange ({ editor, html, text }) {
      this.content = html
    },
    commitArticle ({ editor, html, text }) {
      // this.content = html

      alert(this.content)
      this.axios.post('http://localhost:8081/article', this.article, {
        params: {
          title: this.article.title,
          content: this.content,
          author: '1'
        },
        headers: {
          'content-type': 'application/json'
        }
      }).then(function (res) {
        console.log(res)
      }).catch(function (err) {
        console.log(err)
      })
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    bb () {
      alert('进行添加')
      this.tags.push('aa')
    }
  }
}
</script>
<style>
  .el-menu-demo{
    margin: 0 auto;
    width:1366px ;
  }
  .article-type-select{
    margin-top: 20px;
    font-size: 16px;
  }
  .bz{
    margin-left: 10px;
    font-size: 10px;
    color: #999999;
  }
  #tablist{
    margin-top: 10px;
  }
  .tabitme{
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
  }
</style>
