import Vue from "vue";
import Vuex from "vuex";
import clinics from "./modules/clinics/";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    clinics
  }
});
