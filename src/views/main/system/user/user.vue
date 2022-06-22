<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'
import PageSearch from '@/views/main/components/page-search'
import PageContent from '@/views/main/components/page-content'
import PageModal from '@/views/main/components/page-modal'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

const store = useStore()

// 开发技巧：利用computed处理动态数据
const modalConfigRef = computed(() => {
  const departmentItem = modalConfig.formItems.find(
    (item) => item.field === 'departmentId'
  )

  departmentItem!.options = store.state.entireDepartment.map((item) => {
    return { label: item.name, value: item.id }
  })

  const roleItem = modalConfig.formItems.find((item) => item.field === 'roleId')

  roleItem!.options = store.state.entireRole.map((item) => {
    return { label: item.name, value: item.id }
  })
  return modalConfig
})

const newCallback = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === 'password'
  )
  passwordItem!.isHidden = false
}
const editCallback = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === 'password'
  )
  passwordItem!.isHidden = true
}

const [pageContentRef, resetBtnClick, searchBtnClick] = usePageSearch()
const [pageModalRef, defaultRowData, newBtnClick, editBtnClick] = usePageModal(
  newCallback,
  editCallback
)
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
      pageName="users"
      @newBtnClick="newBtnClick"
      @editBtnClick="editBtnClick"
    >
      <template #enable="scope">
        <el-button
          size="small"
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
    </PageContent>
    <PageModal
      ref="pageModalRef"
      pageName="users"
      :modalConfig="modalConfigRef"
      :defaultRowData="defaultRowData"
    />
  </div>
</template>

<style lang="less" scoped></style>
