<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<style lang="less" scoped>
.app {
  height: 100%;
}
</style>
