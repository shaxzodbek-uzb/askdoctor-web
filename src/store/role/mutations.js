export const mutations = {
  SET_ID: (state, id) => {
    state.id = id
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_SLUG: (state, slug) => {
    state.slug = slug
  },
  SET_PERMISSIONS: (state, permissions) => {
    state.Permissions = permissions.map(({ id, name }) => {
      return id
    })
  }
}
