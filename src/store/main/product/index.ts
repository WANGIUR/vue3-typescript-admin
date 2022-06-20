import type { Module } from 'vuex'
import type { IProductType } from './type'
import type { IRootType } from '@/store/type'

const productModule: Module<IProductType, IRootType> = {
  namespaced: true,
  state() {
    return {
      test: ''
    }
  },
  mutations: {},
  getters: {},
  actions: {}
}

export default productModule
