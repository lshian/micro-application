import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: resolve => require(['@/pages/Home'], resolve)
      },
      {
        path: '/product*',
        name: 'product'
      },
      {
        path: '/order*',
        name: 'order'
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  routes
})
