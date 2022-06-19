<script setup lang="ts">
import { ref } from 'vue'
import WrForm from '@/components/form'

const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})

// 优化一：formData中的属性应该动态决定
const formItems = props.searchFormConfig?.formItems ?? []
const formOriginData: any = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}

const formData = ref(formOriginData)

// 优化二：当用户点击重置
const handleResetClcik = () => {
  formData.value = formOriginData
}
</script>

<template>
  <div class="page-search">
    <WrForm v-bind="searchFormConfig" v-model="formData">
      <template #footer>
        <div class="search-form-btns">
          <el-button :icon="Refresh" size="small" @click="handleResetClcik">
            重置
          </el-button>
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
