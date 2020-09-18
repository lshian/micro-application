<template>
  <el-container class="layout">
    <el-header class="layout_header">
      <div class="logo">
        运维管理平台
      </div>
    </el-header>
    <el-container class="layout_cont">
      <el-aside width="200px">
        <el-menu
          unique-opened
          :default-active="currentPath"
          class="layout_menu"
          background-color="#304156"
          text-color="#bfcbd9"
          active-text-color="#409EFF"
          style="border: 0"
          router
        >
          <el-menu-item index="/">
            <div>
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </div>
          </el-menu-item>
          <el-submenu v-for="item of menuList" :key="item.id" :index="String(item.id)">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item v-for="subItem of item.children" :key="subItem.id" :index="subItem.path">{{subItem.name}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="layout_main" v-loading="loading">
        <router-view />
        <div id="layout_main" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      menuList: [
        {
          id: 1,
          name: '产品中心',
          path: '',
          children: [
            {
              id: 11,
              name: '产品列表',
              path: '/product'
            },
            {
              id: 12,
              name: '产品详情',
              path: '/product/detail'
            }
          ]
        },
        {
          id: 2,
          name: '订单中心',
          path: '',
          children: [
            {
              id: 21,
              name: '订单列表',
              path: '/order'
            },
            {
              id: 22,
              name: '订单详情',
              path: '/order/detail'
            }
          ]
        },
      ],
      current: ''
    }
  },

  computed: {
    loading () {
      const { microLoading } = this.$store.state.global
      return microLoading
    },

    currentPath: {
      get () {
        const current = this.menuList.find(item => this.$route.path.includes(item.path))
        return current.path || this.$route.path
      }
    }
  },

  mounted() {
    this.$store.dispatch('fetchmenuInfo', {pageIndex: 1, pageSize: 6})
  },

  methods: {}
}
</script>

<style scoped lang="less">
@import './index.less';
</style>
