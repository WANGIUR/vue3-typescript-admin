import { ref } from 'vue'
import PageModal from '@/views/main/components/page-modal'

type CallbackFn = (item?: any) => void

export function usePageModal(newCb?: CallbackFn, editCb?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultRowData = ref({})

  const newBtnClick = () => {
    defaultRowData.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCb && newCb()
  }

  const editBtnClick = (row: any) => {
    defaultRowData.value = { ...row }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb()
  }

  return [pageModalRef, defaultRowData, newBtnClick, editBtnClick]
}
