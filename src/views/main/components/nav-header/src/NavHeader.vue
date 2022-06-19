<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import UserInfo from './UserInfo.vue'
import WrBreadcrumb from '@/components/breadcrumb'
import { pathMapToBreadcrumbs } from '@/utils'

const isFold = ref(false)
const store = useStore()
const userMenus = computed(() => store.state.login.userMenus)
const emit = defineEmits(['foldChange'])

const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}

// 面包屑
const breadcrumbs = computed(() => {
  const route = useRoute()
  return pathMapToBreadcrumbs(userMenus.value, route.path)
})
</script>

<template>
  <div class="nav-header">
    <el-icon class="fold-icon" @click="handleFoldClick">
      <Fold v-if="isFold" />
      <Expand v-else />
    </el-icon>
    <div class="content">
      <WrBreadcrumb :breadcrumbs="breadcrumbs" />
      <UserInfo />
    </div>
  </div>
</template>

<style lang="less" scoped>
.nav-header {
  width: 100%;
  display: flex;

  .fold-icon {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;

    .user-info {
      display: flex;
      align-items: center;
    }
  }
}
</style>
