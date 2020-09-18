import Vue from 'vue'
import router from '../router'
import { initGlobalState } from 'qiankun'

// 通讯
const actions = initGlobalState({ // 设置全局变量
  path: '/product'
})

// 在项目中任何需要监听的地方进行监听，在这里监听是为了方便
actions.onGlobalStateChange((state,prev)=>{
  const { pathname } = window.location
  if (state.path !== pathname) router.push(state.path)
})

// 将action对象绑到Vue原型上，为了项目中其他地方使用方便
Vue.prototype.$actions = actions
