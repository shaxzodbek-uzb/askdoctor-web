import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Main/Index.vue'
import ClinicRouter from './modules/clinic'
import DoctorRouter from './modules/doctor'
import ArticleRouter from './modules/article'
import EncyclopediaRouter from './modules/encyclopedia'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    ...ClinicRouter,
    ...DoctorRouter,
    ...ArticleRouter,
    ...EncyclopediaRouter
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "@/views/About.vue")
    // }
  ]
})
