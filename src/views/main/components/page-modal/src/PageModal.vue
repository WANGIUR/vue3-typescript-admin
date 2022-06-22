<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStore } from '@/store'
import WrForm from '@/components/form'

const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  defaultRowData: {
    type: Object,
    default: () => ({})
  },
  pageName: {
    type: String,
    required: true
  }
})

const store = useStore()
const dialogVisible = ref(false)
const formData = ref<any>({})

watch(
  () => props.defaultRowData,
  (newValue) => {
    for (const item of props.modalConfig.formItems) {
      formData.value[`${item.field}`] = newValue[`${item.field}`]
    }
  }
)

const handleConfirmClick = () => {
  dialogVisible.value = false
  if (Object.keys(props.defaultRowData).length) {
    // 编辑
    store.dispatch('system/editPageDataAction', {
      pageName: props.pageName,
      editData: { ...formData.value },
      id: props.defaultRowData.id
    })
  } else {
    // 新建
    store.dispatch('system/createPageDataAction', {
      pageName: props.pageName,
      newData: { ...formData.value }
    })
  }
}

defineExpose({
  dialogVisible
})
</script>

<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      destroy-on-close
    >
      <WrForm v-bind="modalConfig" v-model="formData" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false" size="small">
            取消
          </el-button>
          <el-button type="primary" size="small" @click="handleConfirmClick">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="less" scoped></style>
