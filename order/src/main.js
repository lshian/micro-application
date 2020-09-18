// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import './global.css'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './publicPath'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)

let router = null
let instance = null

function render (props = {}) {
  const { container } = props
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/order' : '/',
    mode: 'history',
    routes
  })

  instance = new Vue({
    router,
    render: h => h(App),
    beforeCreate () {
      window.util = {}
      window.util.$http = axios.create({
        timeout: 1000 * 50,
        withCredentials: true
      })
    }
  }).$mount(container ? container.querySelector('#order') : '#order')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('bootstrap')
}

export async function mount (props) {
  Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange
  Vue.prototype.$setGlobalState = props.setGlobalState
  render(props)
}

export async function unmount () {
  console.log(instance)
  instance.$destroy()
  instance = null
  router = null
}