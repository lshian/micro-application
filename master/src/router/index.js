import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/pages/Home')
        },
        {
          path: '/product/:id?',
          name: 'product',
          component: () => import('@/pages/MicroBox')
        },
        {
          path: '/order/:id?',
          name: 'order',
          component: () => import('@/pages/MicroBox')
        }
      ]
    }
  ]
})
