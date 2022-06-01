import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { WRRquestInterceptors, WRRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import type { LoadingInstance } from 'element-plus/es/components/loading/src/loading'

const DEFAULT_LOADING = true

class WRRquest {
  instance: AxiosInstance
  interceptors?: WRRquestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: WRRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors

    // 单个实例进行请求、响应拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 所有实例的请求、响应拦截
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在加载...'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        const data = res.data
        if (data.returnCode === '-1001') {
          // 请求失败，做相应的错误处理
        } else {
          return data
        }
      },
      (err) => {
        this.loading?.close()
        /**
         * switch(err.response.status)
         * 真实开发根据不同错误码，返回不同错误提示
         */
        if (err.response.status === 404) {
          // 请求失败，做相应的错误处理
        }
        return err
      }
    )
  }

  // 单个请求已实现请求和响应进行拦截
  request<T>(config: WRRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 初始化，避免影响下一次请求
          this.showLoading = DEFAULT_LOADING
          // 返回数据
          resolve(res)
        })
        .catch((err) => {
          // 初始化，避免影响下一次请求
          this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }

  get<T>(config: WRRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: WRRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: WRRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: WRRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default WRRquest
