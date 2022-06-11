<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { UserFilled } from '@element-plus/icons-vue'
import { useStore } from '@/store'

const store = useStore()
const name = computed(() => store.state.login.userInfo.name)
</script>

<template>
  <div class="user-info">
    <el-dropdown size="small">
      <el-avatar :size="30">{{ name }}</el-avatar>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="User">用户信息</el-dropdown-item>
          <el-dropdown-item icon="Setting">系统管理</el-dropdown-item>
          <el-dropdown-item icon="Close" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="less" scoped>
.el-avatar {
  cursor: pointer;
}
</style>
