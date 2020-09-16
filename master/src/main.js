// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './global.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false
Vue.use(ElementUI)

registerMicroApps([
  {
    name: 'product',
    entry: '//localhost:8001',
    container: '#layout_main',
    activeRule: '/product',
    props: {a: 123}
  },
  {
    name: 'order',
    entry: '//localhost:8002',
    container: '#layout_main',
    activeRule: '/order'
  }
], {
  beforeLoad: [
    app => {
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name)
    }
  ],
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    }
  ],
  afterUnmount: [
    app => {
      console.log(app)

      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    }
  ]
})

start()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
