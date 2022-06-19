import { ref } from 'vue'
import PageContent from '@/views/main/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const resetBtnClick = () => {
    pageContentRef.value?.getPageData()
  }
  const searchBtnClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }

  return [pageContentRef, resetBtnClick, searchBtnClick]
}
