<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Title'
  }
})
</script>

<template>
  <div class="wr-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      </template>
      <div class="content">
        <slot></slot>
      </div>
    </el-card>
  </div>
</template>

<style lang="less" scoped>
.wr-card {
  .box-card {
    &:deep(.el-card__header) {
      padding: 10px 20px !important;
    }
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
  }

  .content {
    margin-bottom: 10px;
  }
}
</style>
