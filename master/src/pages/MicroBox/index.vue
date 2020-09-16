<template>
  <div id="microBox" class="microBox"></div>
</template>

<script>
import { Loading } from 'element-ui'
export default {
  name: 'microBox',

  data () {
    return {}
  },

  mounted () {
    Loading.service({target: '#layout_main'})
  }
}
</script>

<style>
  .microBox {
    width: 100%;
    height: 100%;
  }
</style>
