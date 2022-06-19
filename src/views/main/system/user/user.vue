<script setup lang="ts">
import PageSearch from '@/views/main/components/page-search'
import PageContent from '@/views/main/components/page-content'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/usePageSearch'

const [pageContentRef, resetBtnClick, searchBtnClick] = usePageSearch()
</script>

<template>
  <div class="user">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="resetBtnClick"
      @searchBtnClick="searchBtnClick"
    />
    <PageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="user"
    />
  </div>
</template>

<style lang="less" scoped></style>
