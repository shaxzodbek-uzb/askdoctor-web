import { index, show, update as updateAPI, store } from '@/api/page'
export const actions = {
  list({ commit }, query) {
    return new Promise((resolve, reject) => {
      index(query).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  get({ commit, state }, page_id) {
    return new Promise((resolve, reject) => {
      show(page_id, true).then(res => {
        commit('SET_ID', res.data.id)
        commit('SET_TITLE', res.data.name)
        resolve(state)
      }).catch(error => {
        reject(error)
      })
    })
  },
  create({ commit }, page) {
    return new Promise((resolve, reject) => {
      store(page).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  update({ commit }, page) {
    return new Promise((resolve, reject) => {
      updateAPI(page).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  delete({ commit }, role_id) {

  },
  bulk({ commit }, type, list) {

  }
}
