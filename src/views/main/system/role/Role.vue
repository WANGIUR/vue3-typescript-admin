<script setup lang="ts">
import { computed, ref, nextTick } from 'vue'
import { useStore } from '@/store'
import { ElTree } from 'element-plus'
import PageSearch from '@/views/main/components/page-search'
import PageContent from '@/views/main/components/page-content'
import PageModal from '@/views/main/components/page-modal'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/usePageModal'
import { menuMapLeafKeys } from '@/utils'

const store = useStore()
const otherData = ref({})
const elTreeRef = ref<InstanceType<typeof ElTree>>()
const menus = computed(() => store.state.entireMenu)

const editCallback = (row: any) => {
  const leafKeys = menuMapLeafKeys(row.menuList)
  nextTick(() => {
    // nextTick 可以保证调用callback时 elTreeRef 是已经绑定到 ElTree 的
    // console.log(elTreeRef.value)
    elTreeRef.value?.setCheckedKeys(leafKeys, false)
  })
}

const [pageModalRef, defaultRowData, newBtnClick, editBtnClick] = usePageModal(
  undefined,
  editCallback
)

const handleCheckChange = (data1: any, data2: any) => {
  const { checkedKeys, halfCheckedKeys } = data2
  const menuList = [...checkedKeys, ...halfCheckedKeys]
  otherData.value = { menuList }
}
</script>

<template>
  <div class="role">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <PageContent
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @newBtnClick="newBtnClick"
      @editBtnClick="editBtnClick"
    />
    <PageModal
      ref="pageModalRef"
      :defaultRowData="defaultRowData"
      :otherData="otherData"
      :modalConfig="modalConfig"
      pageName="role"
    >
      <el-tree
        ref="elTreeRef"
        class="menu-tree"
        :data="menus"
        show-checkbox
        node-key="id"
        :props="{ children: 'children', label: 'name' }"
        @check="handleCheckChange"
      />
    </PageModal>
  </div>
</template>

<style lang="less" scoped>
.role {
  .menu-tree {
    // padding-left: -50px;
    text-align: left;
    text-indent: 110px;
  }
}
</style>
