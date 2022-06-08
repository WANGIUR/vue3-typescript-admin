<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ArrowLeftBold } from '@element-plus/icons-vue'

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="not-found">
    <h2 class="rainbow">
      4<el-button
        type="primary"
        :icon="ArrowLeftBold"
        circle
        size="large"
        @click="goBack"
      />4
    </h2>
  </div>
</template>

<style lang="less" scoped>
.not-found {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
}
</style>
