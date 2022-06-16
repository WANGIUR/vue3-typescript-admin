<script setup lang="ts">
import PageSearch from '@/views/main/components/page-search'
import PageContent from '@/views/main/components/page-content'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
</script>

<template>
  <div class="role">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <PageContent :contentTableConfig="contentTableConfig" pageName="role" />
  </div>
</template>

<style lang="less" scoped></style>
