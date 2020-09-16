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
          <el-submenu v-for="item of menuList" :key="item.id" :index="String(item.id)">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item v-for="subItem of item.children" :key="subItem.id" :index="subItem.path">{{subItem.name}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main id="layout_main" class="layout_main">
        <router-view />
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
          name: '订单中心',
          path: '',
          children: [
            {
              id: 11,
              name: '订单列表',
              path: '/order'
            },
            {
              id: 12,
              name: '订单分类',
              path: '/category'
            },
            {
              id: 13,
              name: '订单详情',
              path: '/detail'
            },
          ]
        },
        {
          id: 2,
          name: '导航二',
          path: '',
          children: []
        },
        {
          id: 3,
          name: '导航三',
          path: '',
          children: []
        }
      ],
      current: ''
    }
  },

  computed: {
    currentPath: {
      get () {
        const current = this.menuList.find(item => this.$route.path.includes(item.path))
        console.log(this.$route)
        return current.path || this.$route.path
      }
    }
  },

  watch: {
    $route ({ path }) {
      console.log(path)
    }
  }
}
</script>

<style scoped lang="less">
.layout {
  width: 100vw;
  height: 100vh;

  .layout_header {
  background-image: url('data:image/jpeg;base64,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');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
}

.logo {
  color: #ffffff;
  font-size: 20px;
}

.layout_menu {
  height: 100%;
}
}
</style>
