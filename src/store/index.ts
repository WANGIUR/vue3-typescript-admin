import { createStore, useStore as useVuexStore } from 'vuex'
import type { Store } from 'vuex'
import login from './login'
import system from './main/system'
import product from './main/product'
import type { IRootType, IStoreType } from './type'
import { getPageListData } from '@/service/main/system'

const store = createStore<IRootType>({
  state() {
    return {
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  getters: {},
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      //  请求部门和角色的数据
      const departmentRes = await getPageListData('/department/list', {
        offset: 0,
        size: 500
      })
      const { list: departmentList } = departmentRes.data
      const roleRes = await getPageListData('/role/list', {
        offset: 0,
        size: 500
      })
      const { list: roleList } = roleRes.data
      const menuRes = await getPageListData('menu/list', {})
      const { list: menuList } = menuRes.data

      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
      commit('changeEntireMenu', menuList)
    }
  },
  modules: {
    login,
    system,
    product
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
