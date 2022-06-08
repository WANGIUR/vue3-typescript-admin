<script setup lang="ts">
import { ref } from 'vue'

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
  </div>
</template>

<style lang="less" scoped>
.nav-header {
  display: flex;
  align-items: center;

  .fold-icon {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
