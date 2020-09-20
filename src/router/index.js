import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Index from '../page/index'
import articleView from '../page/article/articleView'
import addArticle from '../page/article/addArticle'
import login from '../page/login'
import articleManage from '../page/manage/articleManage'
import editArticle from '../page/article/editArticle'
import UserCenter from '../components/data/UserCenter'
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.use(Router)

const router = new Router({
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
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/manage/articleManage',
      name: 'articleManage',
      component: articleManage
    }, {
      path: '/editArticle',
      name: 'editArticle',
      component: editArticle
    }, {
      path: '/manage/UserCenter',
      name: 'UserCenter',
      component: UserCenter
    }
  ]
})
router.beforeEach((to, from, next) => {
  // 获取sesionStorage里的token
  let isLogin = window.sessionStorage.getItem('token')
  if (isLogin) {
    // 如果用户信息存在则往下执行。
    next()
  } else {
    // 如果用户token不存在则跳转到login页面
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
axios.interceptors.request.use(
  config => {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    let token = sessionStorage.getItem('token')
    if (!config.headers.hasOwnProperty('token') && token) {
      // alert(token)
      config.headers.token = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  })
export default router
