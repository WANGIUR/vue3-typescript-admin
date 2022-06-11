<script setup lang="ts">
import { ref } from 'vue'
import UserInfo from './UserInfo.vue'

const isFold = ref(false)
const emit = defineEmits(['foldChange'])

const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<template>
  <div class="nav-header">
    <el-icon class="fold-icon" @click="handleFoldClick">
      <Fold v-if="isFold" />
      <Expand v-else />
    </el-icon>
    <div class="content">
      <div>面包屑</div>
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
