const children = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/Home'),
  },
  {
    path: '/product',
    name: 'index',
    component: () => import('@/pages/Home')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/pages/Home/Detail')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@/pages/Category')
  }
]

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout'),
    children
  }
]

export default window.__POWERED_BY_QIANKUN__ ? children : routes
