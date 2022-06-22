<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import WrTabel from '@/components/tabel'
import { useStore } from '@/store'
import { usePermission } from '@/hooks/usePermission'

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

const emit = defineEmits(['newBtnClick', 'editBtnClick'])

// 获取操作权限
const isCreate = usePermission(props.pageName, 'create')
const isUpdate = usePermission(props.pageName, 'update')
const isDelete = usePermission(props.pageName, 'delete')
const isQuery = usePermission(props.pageName, 'query')

const pageInfo = ref({ pageSize: 10, currentPage: 1 })
watch(pageInfo, () => {
  getPageData()
})

const getPageData = (queryInfo: any = {}) => {
  if (!isQuery) return
  store.dispatch('system/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  })
}

// 初始页面
getPageData()

const listData = computed(() =>
  store.getters[`system/pageListData`](props.pageName)
)
const listCount = computed(() =>
  store.getters[`system/pageListCount`](props.pageName)
)

// 表格行选中后获取数据可进行 导出/删除 等类似扩展操作
const selectionChange = (value: any) => {
  console.log(value)
}

// 新增
const handleNewCreate = () => {
  emit('newBtnClick')
}

// 获取需要动态插槽的名称
const dynamicPropSlots = props.contentTableConfig?.propList.filter(
  (item: any) => {
    if (item.slotName === 'handler') return false
    if (item.slotName === 'createAt') return false
    if (item.slotName === 'updateAt') return false
    if (item.slotName === 'operate') return false
    return true
  }
)

// 编辑
const handleEditClick = (row: any) => {
  emit('editBtnClick', row)
}

// 删除
const handleDeleteClick = (row: any) => {
  store.dispatch('system/deletePageDataAction', {
    pageName: props.pageName,
    id: row.id
  })
}

defineExpose({
  getPageData
})
</script>

<template>
  <div class="page-content">
    <WrTabel
      :listData="listData"
      :listCount="listCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
      @selectionChange="selectionChange"
    >
      <template #handler>
        <el-button
          v-if="isCreate"
          type="primary"
          size="small"
          @click="handleNewCreate"
          :icon="contentTableConfig.handlerBtnIcon"
        >
          {{ contentTableConfig.handlerBtnName }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatUTCT(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatUTCT(scope.row.updateAt) }}</span>
      </template>
      <template #operate="scope">
        <div class="handle-btns">
          <el-button
            v-if="isUpdate"
            link
            size="small"
            icon="Edit"
            type="primary"
            @click="handleEditClick(scope.row)"
            >编辑</el-button
          >
          <el-button
            v-if="isDelete"
            link
            size="small"
            icon="Delete"
            type="primary"
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>

      <!-- 动态插槽 -->
      <template
        v-for="item in dynamicPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
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
