import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Index from '../page/index'
import articleView from '../page/article/articleView'
import addArticle from '../page/article/addArticle'

Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/articleView',
      name: 'articleView',
      component: articleView
    }, {
      path: '/addArticle',
      name: 'addArticle',
      component: addArticle
    }
  ]
})
