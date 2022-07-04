<script setup lang="ts">
import PageContent from '@/views/main/components/page-content'
import { contentTableConfig } from './config/content.config'
</script>

<template>
  <div class="menu">
    <PageContent :contentTableConfig="contentTableConfig" pageName="menu" />
  </div>
</template>

<style lang="less" scoped></style>
