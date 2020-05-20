<template>

  <el-container direction="vertical">
    <el-row>
      <el-col :xs="{span:24,offset:0}" :xl="{span:24,offset:0}">
        <div class="headNav" style="border-bottom: solid 1px #e6e6e6;background-color: #ffffff">
          <headerNav></headerNav>
        </div>
      </el-col>
    </el-row>
    <el-main>
      <el-row>
        <el-col :span="18" offset="3">
          <el-card class="box-card" shadow="never" style="height: 800px">
            <el-input
              placeholder="请输入文章标题"
              v-model="article.title"
              clearable>
            </el-input>
            <div class="article-write-box" style="height: 650px;margin-top: 20px">
            <quill-editor ref="myTextEditor" v-model="content" :options="editorOption" style="height:600px;"></quill-editor>
            </div>
            <div><el-button type="danger" @click="commitArticle">提交文章</el-button></div>
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
      }
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
        }
      }).then(function (res) {
        console.log(res)
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>
<style>
  .el-menu-demo{
    margin: 0 auto;
    width:1366px ;
  }
</style>
