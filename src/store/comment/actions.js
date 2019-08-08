import { index, show, update as updateAPI, store } from '@/api/comment'
export const actions = {
  list({ commit }, query) {
    query.include = 'Author'
    return new Promise((resolve, reject) => {
      index(query, true).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  get({ commit, state }, comment_id) {
    return new Promise((resolve, reject) => {
      show(comment_id, true).then(res => {
        commit('SET_ID', res.data.id)
        commit('SET_BODY', res.data.body)
        resolve(state)
      }).catch(error => {
        reject(error)
      })
    })
  },
  create({ commit }, comment) {
    return new Promise((resolve, reject) => {
      store(comment).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  update({ commit }, comment) {
    return new Promise((resolve, reject) => {
      updateAPI(comment).then(response => {
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
