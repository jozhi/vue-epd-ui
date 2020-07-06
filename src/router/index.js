import Vue from 'vue'
import VueRouter from 'vue-router'

// 修复 vueRouter 3.1.0+ 重复跳转同一路由导致的控制台报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

import Login from '../basicModule/system/Login'
import Home from '../basicModule/system/Home'
import Index from '../basicModule/system/index'

import AppManageRouter from '../views/appManage/AppManage.route'

Vue.use(VueRouter)
const routes = [{
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    children: [{
        path: '/Home',
        meta: {
          title: '首页'
        },
        component: Index
      },
      ...AppManageRouter
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router