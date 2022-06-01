import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface WRRquestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (config: any) => any
}

export interface WRRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: WRRquestInterceptors<T>
  showLoading?: boolean
}
