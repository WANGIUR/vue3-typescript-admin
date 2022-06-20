import type { Module } from 'vuex'
import type { ISystemType } from './type'
import type { IRootType } from '@/store/type'
import { getPageListData } from '@/service/main/system'

const pageUrlMap = new Map([
  ['user', '/users/list'],
  ['role', '/role/list'],
  ['goods', '/goods/list']
])

const systemModule: Module<ISystemType, IRootType> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    // user页面数据请求
    async getPageListAction({ commit }, payload: any) {
      const { pageName, queryInfo } = payload
      const pageUrl = pageUrlMap.get(pageName)
      if (pageUrl) {
        const pageResult = await getPageListData(pageUrl, queryInfo)
        const { list, totalCount } = pageResult.data
        switch (pageName) {
          case 'user':
            commit('changeUserList', list)
            commit('changeUserCount', totalCount)
            break
          case 'role':
            commit('changeRoleList', list)
            commit('changeRoleCount', totalCount)
            break
          case 'goods':
            commit('changeGoodsList', list)
            commit('changeGoodsCount', totalCount)
            break
          default:
            break
        }
      }
    }
  }
}

export default systemModule
