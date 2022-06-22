import type { Module } from 'vuex'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login'
import { localCache } from '@/utils'
import router from '@/router'
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils'
import type { ILoginType } from './type'
import type { IRootType } from '../type'
import type { IAccount } from '@/service/login/type'

const loginModule: Module<ILoginType, IRootType> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      const routes = mapMenusToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      // 获取用户按钮的权限
      state.permissions = mapMenusToPermissions(userMenus)
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      // 实现登录逻辑
      const loginRes = await accountLoginRequest(payload)
      const { id, token } = loginRes.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 初始化部门和角色数据
      dispatch('getInitialDataAction', null, { root: true })

      // 请求登录用户信息
      const userInfoRes = await requestUserInfoById(id)
      const userInfo = userInfoRes.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 请求用户菜单树
      const userMenusRes = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusRes.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 跳转至首页
      router.push('/main')
    },
    // 手机登录 (暂未提供相关接口)
    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('payload', payload)
    // }

    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
        // 初始化部门和角色数据
        dispatch('getInitialDataAction', null, { root: true })
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
