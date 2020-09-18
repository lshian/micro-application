<template>
  <div>
    <div>欢迎访问</div>
    <input v-model="value" />
  </div>
</template>

<script>
export default {
  name: 'home',

  data () {
    return {
      value: ''
    }
  },
  
  watch: {
    value (value) {
      this.$store.commit('setValue', value)
    }
  }
}
</script>