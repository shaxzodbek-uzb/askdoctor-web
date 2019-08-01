import { index, show, store, update as updateAPI } from '@/api/clinic'
export const actions = {
  fetchClinics({ commit }, query = {}) {
    console.log('fetch')
    return new Promise((resolve, reject) => {
      index(query)
        .then(response => {
          commit('SET_CLINICS', response.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  get({ commit, state }, role_id) {
    return new Promise((resolve, reject) => {
      show(role_id, true)
        .then(res => {
          commit('SET_ID', res.data.id)
          commit('SET_NAME', res.data.name)
          resolve(state)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  create({ commit }, role) {
    return new Promise((resolve, reject) => {
      store(role)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  update({ commit }, role) {
    return new Promise((resolve, reject) => {
      updateAPI(role)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  delete({ commit }, role_id) {},
  bulk({ commit }, type, list) {}
}
