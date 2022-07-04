<script setup lang="ts">
import pageContent from '@/views/main/components/page-content'
import { contentTableConfig } from './config/content.config'
</script>

<template>
  <div class="goods">
    <pageContent :contentTableConfig="contentTableConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 20px; height: 20px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          :initial-index="0"
          fit="cover"
          preview-teleported
        />
      </template>
      <template #status="scope">
        <el-button
          size="small"
          plain
          :type="scope.row.status ? 'success' : 'danger'"
        >
          {{ scope.row.status ? '上架' : '下架' }}
        </el-button>
      </template>
      <template #oldPrice="scope">
        {{ '¥' + scope.row.oldPrice }}
      </template>
      <template #newPrice="scope">
        {{ '¥' + scope.row.newPrice }}
      </template>
    </pageContent>
  </div>
</template>

<style lang="less" scoped></style>
