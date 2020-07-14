import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// 公共 class 引入
import './assets/css/cube.css';
import './assets/css/page.less';

// ElementUI 引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// epdUI 引入
import epdUI from '@/components'
Vue.use(epdUI)

// 告诉Vue 要使用插件 vue-highlightjs
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/arduino-light.css'
Vue.use(VueHighlightJS)

import * as api from './api/index'
Vue.prototype.$api = api    // 数据请求方法

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
