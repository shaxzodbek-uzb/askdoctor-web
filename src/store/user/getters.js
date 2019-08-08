export const getters = {
  USERS: (state) => state.users,
  // Editable user getters
  USER: (state) => state.user,
  USER_AVATAR: (state) => state.user.FeaturedPhoto,
  USER_TRANSLATE: (state) => code => state.user.translate[code],
  // Auth user getters
  AUTH_USER: (state) => state.auth_user,
  AUTH_USER_TOKEN: state => state.auth_user.token,
  AUTH_USER_AVATAR: state => state.auth_user.avatar,
  AUTH_USER_FIRST_NAME: state => state.auth_user.first_name
}
