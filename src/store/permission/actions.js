import { index, show, update as updateAPI, store } from '@/api/permission'
export const actions = {
  list({ commit }, query = {}) {
    return new Promise((resolve, reject) => {
      index(query, true).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  get({ commit, state }, permission_id) {
    return new Promise((resolve, reject) => {
      show(permission_id, true).then(res => {
        commit('SET_ID', res.data.id)
        commit('SET_NAME', res.data.name)
        commit('SET_ROLES', res.data.Roles.data)
        resolve(state)
      }).catch(error => {
        reject(error)
      })
    })
  },
  create({ commit }, permission) {
    return new Promise((resolve, reject) => {
      store(permission).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  update({ commit }, permission) {
    return new Promise((resolve, reject) => {
      updateAPI(permission).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  delete({ commit }, permission_id) {

  },
  bulk({ commit }, type, list) {

  }
}
