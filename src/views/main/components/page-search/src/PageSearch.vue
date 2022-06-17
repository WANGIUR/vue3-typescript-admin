<script setup lang="ts">
import { ref } from 'vue'
import WrForm from '@/components/form'

defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})

const formData = ref({
  id: '',
  name: '',
  password: '',
  sport: '',
  createTime: ''
})
</script>

<template>
  <div class="page-search">
    <WrForm v-bind="searchFormConfig" v-model="formData">
      <template #footer>
        <div class="search-form-btns">
          <el-button :icon="Refresh" size="small">重置</el-button>
          <el-button type="primary" :icon="Search" size="small">搜索</el-button>
        </div>
      </template>
    </WrForm>
  </div>
</template>

<style lang="less" scoped>
.page-search {
  .search-form-btns {
    text-align: right;
    padding: 0 10px 10px 0;
  }
}
</style>
