import WrRequest from '@/service'
import type { IDataType } from '../../type'

export function getPageListData(url: string, queryInfo: any) {
  return WrRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}

export function deletePageDataById(url: string) {
  return WrRequest.delete<IDataType>({
    url
  })
}

export function createPageData(url: string, newData: any) {
  return WrRequest.post<IDataType>({
    url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return WrRequest.patch<IDataType>({
    url,
    data: editData
  })
}
