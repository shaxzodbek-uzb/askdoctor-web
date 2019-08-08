export const mutations = {

  SET_ID: (state, id) => {
    state.user.id = id
  },
  SET_FIRST_NAME: (state, first_name) => {
    state.user.first_name = first_name
  },
  SET_LAST_NAME: (state, last_name) => {
    state.user.last_name = last_name
  },
  SET_EMAIL: (state, email) => {
    state.user.email = email
  },
  SET_PHONE: (state, phone) => {
    state.user.phone = phone
  },
  // Editable user setters
  SET_USER: (state, user) => {
    state.user.id = user.id
    state.user.first_name = user.first_name
    state.user.last_name = user.last_name
    state.user.email = user.email
    state.user.phone = user.phone
  },
  SET_USER_AVATAR: (state, avatar) => {
    if (avatar !== undefined) { state.user.Avatar = avatar }
  },
  SET_USER_PROFILE: (state, profile) => {
    if (profile !== undefined) { state.user.Profile = profile }
  },

  // Auth user setters
  SET_AUTH_USER: (state, user) => {
    state.auth_user.id = user.id
    state.auth_user.first_name = user.first_name
    state.auth_user.last_name = user.last_name
    state.auth_user.email = user.email
    state.auth_user.phone = user.phone
  },
  AUTH_USER_AVATAR: (state, avatar) => {
    state.auth_user.avatar = avatar // process.env.VUE_APP_BASE_URL + 'images/avatar.png'
  },
  AUTH_USER_TOKEN: (state, token) => {
    state.auth_user.token = token
  }
}
