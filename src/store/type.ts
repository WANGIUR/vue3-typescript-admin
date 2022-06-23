import { ILoginType } from './login/type'
import { ISystemType } from './main/system/type'
import { IDashboardType } from './main/analysis/type'

export interface IRootType {
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  login: ILoginType
  system: ISystemType
  dashboard: IDashboardType
}

export type IStoreType = IRootType & IRootWithModule
