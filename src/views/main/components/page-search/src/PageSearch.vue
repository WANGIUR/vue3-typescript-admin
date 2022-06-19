<script setup lang="ts">
import { ref } from 'vue'
import { Search, Refresh } from '@element-plus/icons-vue'
import WrForm from '@/components/form'

const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['resetBtnClick', 'searchBtnClick'])

// 动态决定formData中的属性
const formItems = props.searchFormConfig?.formItems ?? []
const formOriginData: any = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}

const formData = ref(formOriginData)

// reset
const handleResetClick = () => {
  formData.value = formOriginData
  emit('resetBtnClick')
}

// search
const handleSearchClick = () => {
  emit('searchBtnClick', formData.value)
}
</script>

<template>
  <div class="page-search">
    <WrForm v-bind="searchFormConfig" v-model="formData">
      <template #footer>
        <div class="search-form-btns">
          <el-button :icon="Refresh" size="small" @click="handleResetClick">
            重置
          </el-button>
          <el-button
            type="primary"
            :icon="Search"
            size="small"
            @click="handleSearchClick"
            >搜索</el-button
          >
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
