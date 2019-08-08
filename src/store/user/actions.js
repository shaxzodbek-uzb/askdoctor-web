import { login, logout, getInfo, get, store, update } from '@/api/user'
import { setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

export const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ phone: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_AUTH_USER', data)
        commit('AUTH_USER_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.user.token).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }
        commit('SET_AUTH_USER', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('AUTH_USER_TOKEN', '')
        removeToken()
        resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('AUTH_USER_TOKEN', '')
      removeToken()
      resolve()
    })
  },

  registration({ commit, dispatch }, user) {
    return new Promise((resolve, reject) => {
      store(user).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  fetch({ commit }, id) {
    const query = { include: 'Profile,Profile.City,Profile.Country,Profile.Specialty,Avatar' }
    return new Promise((resolve, reject) => {
      get(id, query).then(res => {
        commit('SET_USER', res.data)
        commit('SET_USER_AVATAR', res.data.Avatar.data)
        commit('SET_USER_PROFILE', res.data.Profile.data)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  update({ commit, dispatch }, user) {
    const converted_user = {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
      avatar: {
        id: user.Avatar.id
      } // ,
      // profile: {
      //   rating: user.Profile.rating,
      //   experience: user.Profile.experience,
      //   birth_date: user.Profile.birth_date
      // }
    }
    return new Promise((resolve, reject) => {
      const query = { include: 'Profile,Profile.City,Profile.Country,Profile.Specialty,Avatar' }

      update(converted_user, query).then(res => {
        if (res.result && res.result === false) { reject(res) } else {
          commit('SET_USER', res.data)
          commit('SET_USER_AVATAR', res.data.Avatar.data)
          commit('SET_USER_PROFILE', res.data.Profile.data)
          resolve(res)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  create({ commit }, user) {
    return new Promise((resolve, reject) => {
      store(user).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  setAvatar({ commit }, avatar) {
    console.log(avatar)
    commit('SET_USER_AVATAR', avatar)
  }
}
