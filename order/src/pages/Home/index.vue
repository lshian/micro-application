<template>
  <div>
    订单列表
    <router-link to="/detail">详情</router-link>
    <router-link to="/product">产品中心</router-link>
    <router-link to="/product/detail">产品详情</router-link>
    <div @click="handleRouterProduct('/product')">产品中心</div>
    <div @click="handleRouterProduct('product/detail')">产品详情</div>
  </div>
</template>

<script>
export default {
  name: 'order',

  data () {
    return {}
  },
  
  methods: {
    handleRouterProduct (path) {
      this.$setGlobalState({path: `${path}?id=123`})
    }
  }
}
</script>