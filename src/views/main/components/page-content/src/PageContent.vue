<script setup lang="ts">
import { computed } from 'vue'
import WrTabel from '@/components/tabel'
import { useStore } from '@/store'

const store = useStore()
const props = defineProps({
  contentTableConfig: {
    type: Object,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
})

const getPageData = (queryInfo: any = {}) => {
  store.dispatch('system/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset: 0,
      size: 10,
      ...queryInfo
    }
  })
}

getPageData()

const listData = computed(() =>
  store.getters[`system/pageListData`](props.pageName)
)
// const userCount = computed(() => store.state.system.userCount)

const selectionChange = (value: any) => {
  // 支持选中后进行 导出/删除 等类似扩展操作
  console.log(value)
}

const handleNewCreate = () => {
  console.log('handleAddUser')
}

defineExpose({
  getPageData
})
</script>

<template>
  <div class="page-content">
    <WrTabel
      :listData="listData"
      v-bind="contentTableConfig"
      @selectionChange="selectionChange"
    >
      <template #handler>
        <el-button
          type="primary"
          size="small"
          @click="handleNewCreate"
          :icon="contentTableConfig.handlerBtnIcon"
        >
          {{ contentTableConfig.handlerBtnName }}
        </el-button>
      </template>
      <template #enable="scope">
        <el-button
          size="small"
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatUTCT(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatUTCT(scope.row.updateAt) }}</span>
      </template>
      <template #operate>
        <div class="handle-btns">
          <el-button link size="small" icon="Edit">编辑</el-button>
          <el-button link size="small" icon="Delete">删除</el-button>
        </div>
      </template>
    </WrTabel>
  </div>
</template>

<style lang="less" scoped>
.page-content {
  padding: 10px;
  border-top: 20px solid #f0f2f5;
}
</style>
