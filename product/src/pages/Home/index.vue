<template>
  <div>
    产品列表
    <br>
    <div>当前显示id:{{this.$route.query.id}}</div>
    <button @click="handleRouter">跳转到订单页</button>
    <br>
    {{'this is my name --- '+name}}
  </div>
</template>

<script>
export default {
  name: 'order',

  data () {
    return {
      name: 'init name'
    }
  },

  mounted(){
    // 增加state监听，当mt数据发生变化的时候，我们修改name，体现在页面上
    // this.$onGlobalStateChange((state,prev)=>{
    //   if(state.mt !== prev.mt){
    //     this.name = state.mt
    //   }
    // })
  },
  methods: {
    handleRouter (){
      if (window.__POWERED_BY_QIANKUN__) this.$setGlobalState({path: '/order'})
      else window.open('//localhost:8002')
    }
  }
}
</script>