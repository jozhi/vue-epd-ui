import Vue from 'vue'
import Vuex from 'vuex'
import qs from 'qs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 左侧栏展开收缩
    isSidebar: true,
    // header部分，菜单页签功能
    menu: sessionStorage.getItem('menu') ? qs.parse(sessionStorage.getItem('menu')) : [],
  },
  mutations: {
    // 设置左侧栏展开收缩
    SET_SIDEBAR(state, value) {
      state.isSidebar = value
    },
    SET_MENU(state, value) {
      sessionStorage.setItem('menu', qs.stringify(value))
      state.menu = value
    },
  },
  actions: {
    // 更新左侧展开收缩
    SET_SIDEBAR({ commit }, value) { commit('SET_SIDEBAR', value) },
    SET_MENU({ commit }, value) { commit('SET_MENU', value) },
  },
  getters:{
    isSidebar: state => state.isSidebar,
    menu: state => state.menu,
  },
  modules: {
  }
})
