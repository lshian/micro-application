import store from '../store'

export default [
  {
    name: 'product',
    entry: process.env.PRODUCT_ROOT,
    container: '#layout_main',
    activeRule: '/product',
    props: {value: store.state.global.value}
  },
  {
    name: 'order',
    entry: process.env.ORDER_ROOT,
    container: '#layout_main',
    activeRule: '/order'
  }
]