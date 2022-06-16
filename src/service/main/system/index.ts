import WrRequest from '@/service'
import type { IDataType } from '../../type'

export function getPageListData(url: string, queryInfo: any) {
  return WrRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}
