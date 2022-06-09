<script setup lang="ts">
import { ref } from 'vue'
import NavMenu from './components/nav-menu/src/NavMenu.vue'
import NavHeader from './components/nav-header/src/NavHeader.vue'

const isFoldInMain = ref(false)

const foldChange = (isFold: boolean) => {
  isFoldInMain.value = isFold
}
</script>

<template>
  <div class="main">
    <el-container class="content">
      <el-aside :width="isFoldInMain ? '60px' : '210px'" class="aside">
        <NavMenu :collapse="isFoldInMain" />
      </el-aside>
      <el-container class="page">
        <el-header class="page_header">
          <NavHeader @foldChange="foldChange" />
        </el-header>
        <el-main class="page_main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .content {
    height: 100%;

    .aside {
      cursor: pointer;
      background-color: #001529;
      transition: width 0.2s linear;
    }
  }

  .page {
    height: 100%;

    &_header {
      height: 48px;
      color: #333;
      display: flex;
      align-items: center;
      text-align: center;
    }

    &_main {
      height: calc(100% - 48px);
      color: #333;
      text-align: center;
      background-color: #f0f2f5;
    }
  }
}
</style>
