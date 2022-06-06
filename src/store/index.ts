import { createStore } from 'vuex'
import login from './login/login'
import type { IRootType } from './type'

const store = createStore<IRootType>({
  state() {
    return {
      test: ''
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
