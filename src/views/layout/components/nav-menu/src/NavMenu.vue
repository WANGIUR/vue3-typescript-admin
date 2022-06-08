<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'

const store = useStore()
const userMenus = computed(() => store.state.login.userMenus)
defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/images/logo.png" alt="logo" />
      <span class="title" v-if="!collapse">Vue3&TS</span>
    </div>
    <el-menu
      default-active=""
      :unique-opened="true"
      :collapse="collapse"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <!-- 解决接口设计的图标类与当前element+的icon版本不一致的问题 -->
              <el-icon><ElementPlus /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.id + ''">
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.id + ''">
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 20px 8px 20px;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin-right: 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 600;
      color: #fff;
    }
  }

  .el-menu-vertical {
    height: calc(100% - 48px);
    border-right: none;

    .el-sub-menu {
      // background-color: #001529 !important;
      // 二级菜单 ( 默认背景 )
      .el-menu-item {
        padding-left: 50px !important;
        background-color: #0c2135 !important;
      }
    }

    ::v-deep .el-sub-menu__title {
      background-color: #001529 !important;
    }

    // hover 高亮
    .el-menu-item:hover {
      color: #fff !important; // 菜单
      background-color: #516981 !important;
    }

    .el-menu-item.is-active {
      color: #fff !important;
      background-color: #3b75b4 !important;
    }
  }
}
</style>
