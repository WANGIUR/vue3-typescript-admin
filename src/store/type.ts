import { ILoginType } from './login/type'
import { ISystemType } from './main/system/type'

export interface IRootType {
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  login: ILoginType
  system: ISystemType
}

export type IStoreType = IRootType & IRootWithModule
