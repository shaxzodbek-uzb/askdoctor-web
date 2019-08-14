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
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-toaster/dist/v-toaster.css'
import './sass/ui.scss'
import './sass/responsive.scss'

// optional set default imeout, the default is 10000 (10 seconds).
Vue.use(Toaster, { timeout: 3000 })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
