export const mutations = {
  SET_ID: (state, id) => {
    state.id = id
  },
  SET_BODY: (state, body) => {
    state.body = body
  },
  SET_AUTHOR: (state, Author) => {
    state.Author = Author.data
  }
}
