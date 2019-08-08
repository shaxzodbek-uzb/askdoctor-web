import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'
import { state } from './state'

export default {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}

