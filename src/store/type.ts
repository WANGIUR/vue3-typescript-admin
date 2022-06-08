import { ILoginType } from './login/type'

export interface IRootType {
  test: string
}

export interface IRootWithModule {
  login: ILoginType
}

export type IStoreType = IRootType & IRootWithModule
