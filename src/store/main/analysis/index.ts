import type { Module } from 'vuex'
import type { IRootType } from '@/store/type'
import type { IDashboardType } from './type'
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/service/main/analysis'

const dashboardModule: Module<IDashboardType, IRootType> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryGoodsCountRes = await getCategoryGoodsCount()
      const categoryGoodsSaleRes = await getCategoryGoodsSale()
      const categoryGoodsFavorRes = await getCategoryGoodsFavor()
      const addressGoodsSaleRes = await getAddressGoodsSale()

      commit('changeCategoryGoodsCount', categoryGoodsCountRes.data)
      commit('changeCategoryGoodsSale', categoryGoodsSaleRes.data)
      commit('changeCategoryGoodsFavor', categoryGoodsFavorRes.data)
      commit('changeAddressGoodsSale', addressGoodsSaleRes.data)
    }
  }
}

export default dashboardModule
