import type { Module } from 'vuex'
import type { ISystemType } from './type'
import type { IRootType } from '@/store/type'
import { getPageListData } from '@/service/main/system'
import { deletePageDataById } from '@/service/main/system'

const pageUrlMap = new Map([
  ['users', '/users/list'],
  ['role', '/role/list'],
  ['goods', '/goods/list'],
  ['menu', '/menu/list']
])

const systemModule: Module<ISystemType, IRootType> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    changeUsersList(state, usersList: any[]) {
      state.usersList = usersList
    },
    changeUserCount(state, usersCount: number) {
      state.usersCount = usersCount
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
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
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
          case 'users':
            commit('changeUsersList', list)
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
          case 'menu':
            commit('changeMenuList', list)
            commit('changeMenuCount', totalCount)
            break
          default:
            break
        }
      }
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      console.log('first')
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await deletePageDataById(pageUrl)
      /**
       * 待优化
       * 查询状态删除数据需要获取到对应 queryInfo
       */
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
