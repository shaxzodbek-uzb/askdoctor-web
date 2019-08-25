import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/'
import './registerServiceWorker'
import Toaster from 'v-toaster'
import JQuery from 'jquery'
window.$ = window.JQuery = JQuery
import 'slick-carousel'
import 'bootstrap'

import 'v-toaster/dist/v-toaster.css'
import './sass/ui.scss'
import './sass/responsive.scss'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import './fonts/fontawesome/css/all.min.css'

// optional set default imeout, the default is 10000 (10 seconds).
Vue.use(Toaster, { timeout: 3000 })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
