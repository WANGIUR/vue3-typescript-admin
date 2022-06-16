<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { UserFilled } from '@element-plus/icons-vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
import { localCache } from '@/utils'

const store = useStore()
const router = useRouter()
const name = computed(() => store.state.login.userInfo.name)

const handleSignOut = () => {
  localCache.removeCache('token')
  router.push('/login')
}
</script>

<template>
  <div class="user-info">
    <el-dropdown>
      <el-avatar :size="30">{{ name }}</el-avatar>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="SwitchButton" @click="handleSignOut">
            退出登录
          </el-dropdown-item>
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
