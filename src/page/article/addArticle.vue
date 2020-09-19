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
            <div class="tabitme" v-for="(tag,index) in tags">
              <el-button type="info" plain size="mini" @click="getTag(index)">{{tag.tagName}}</el-button>
            </div>
          </div>
            <div style="margin-top: 20px">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </div>
        </el-dialog>

      </el-col>
    </el-row>
    <el-main>
      <el-row>
        <el-col :span="18" offset="3">
          <el-card class="box-card" shadow="never" style="height: 1000px">
            <el-input
              placeholder="请输入文章标题"
              v-model="article.title"
              clearable>
            </el-input>
            <div class="article-write-box" style="height: 650px;margin-top: 20px">
              <el-upload
                v-show="false"
                class="avatar-uploader"
                :action="serverUrl"
                name="img"
                :headers="header"
                :show-file-list="false"
                :on-success="uploadSuccess"
                :on-error="uploadError"
                :before-upload="beforeUpload">
              </el-upload>
              <el-row v-loading="quillUpdateImg"/>
            <quill-editor ref="myTextEditor" v-model="content" :options="editorOption" style="height:600px;"></quill-editor>
            </div>
            <div class="article-set">
            <div class="article-type-select">
              文章类型：
              <el-select v-model="article.articleType" placeholder="请选择"  size="small" @change="typeChanged">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <span class="bz">*原创的文章享有版权保护，请勿将复制黏贴来的知识作为原创！</span>
            </div>

            <div style="margin-top: 20px" id="article-tags">
              文章标签：<el-button size="mini" @click="addTags">添加标签<i class="el-icon-plus el-icon--right"></i></el-button>
              <span v-for="(selectedTag,index) in selectedTags" style="padding:0 2px"><el-button size="mini">{{selectedTag}}<i class="el-icon-circle-close el-icon--right" @click="removeTag(index)"></i></el-button></span>
            </div>
            <div style="margin-top: 20px;">
              是否开放：<el-switch
              v-model="isopened"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="公开"
              inactive-text="私密">
            </el-switch>
            </div>
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
import {quillEditor} from 'vue-quill-editor'
import headerNav from '../../components/ui/header'
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike', {'font': []}],
  ['blockquote', 'code-block'],
  [{ 'header': 1 }, { 'header': 2 }],
  ['image']
]
export default {
  data () {
    return {
      content: `<p></p><p><br></p><ol></ol>`,
      quillUpdateImg: false, // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
      serverUrl: 'http://localhost:8081/getFile', // 图片服务器地址
      header: {token: sessionStorage.token}, // 有的图片服务器要求请求头需要有token之类的参数，写在这里
      detailContent: '', // 富文本内容
      editorOption: {
        placeholder: '编辑文章内容',
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              'image': function (value) {
                if (value) {
                  document.querySelector('.avatar-uploader input').click()
                } else {
                  this.quill.format('image', false)
                }
              }
            }
          }
        }
      },
      article: {
        title: '',
        articleContent: '',
        authorId: '',
        articleType: '原创',
        articleTags: []
      },
      options: [{
        value: '原创',
        label: '原创'
      }, {
        value: '转载',
        label: '转载'
      }, {
        value: '资源',
        label: '资源'
      }, {
        value: '通知',
        label: '通知'
      }],
      value: '',
      visible: false,
      dialogVisible: false,
      tags: [],
      selectedTags: [],
      isopened: true
    }
  },
  components: {
    headerNav, quillEditor
  },
  methods: {
    onEditorChange ({ editor, html, text }) {
      this.content = html
    },
    beforeUpload (res, file) {
      this.quillUpdateImg = true
    },
    // 上传图片成功
    uploadSuccess (res, file) {
      // res为图片服务器返回的数据
      // 获取富文本组件实例
      let quill = this.$refs.myTextEditor.quill
      if (res !== null) {
        // 获取光标所在位置
        let length = quill.getSelection().index
        console.log(res)
        // 插入图片  res.info为服务器返回的图片地址
        quill.insertEmbed(length, 'image', 'http://localhost:8081/picture' + res)
        // 调整光标到最后
        quill.setSelection(length + 1)
      } else {
        this.$message.error('图片插入失败')
      }
      // loading动画消失
      this.quillUpdateImg = false
    },
    // 上传图片失败
    uploadError (res, file) {
      // loading动画消失
      this.quillUpdateImg = false
      this.$message.error('图片上传失败')
    },
    commitArticle ({ editor, html, text }) {
      this.axios.post('http://localhost:8081/article', this.article, {
        params: {
          title: this.article.title,
          content: this.content,
          authorId: '1'
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
      done()
    },
    getTag (index) {
      if (this.selectedTags.indexOf(this.tags[index].tagName) > -1) {
        return false
      }
      this.selectedTags.push(this.tags[index].tagName)
    },
    addTags () {
      this.axios.get('http://localhost:8081/getTags').then((response) => {
        this.tags = response.data
      })
      this.dialogVisible = true
    },
    removeTag (index) {
      this.selectedTags.splice(index, 1)
    },
    typeChanged (a) {
      this.articleType = a
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
    margin-top: 40px;
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
    padding: 0 5px;
  }
  .article-set{
    font-size: 14px;
  }
</style>
