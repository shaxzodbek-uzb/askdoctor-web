import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './app'
import settings from './settings'
import user from './user'
import tagsView from './tagsView'
import role from './role'
import permission from './permission'
import clinic from './clinic'
import specialty from './specialty'
import page from './page'
import page_category from './page_category'
import comment from './comment'
import language from './language'
import region from './region'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    tagsView,
    role,
    permission,
    clinic,
    specialty,
    page,
    page_category,
    comment,
    language,
    region
  },
  getters
})

export default store
