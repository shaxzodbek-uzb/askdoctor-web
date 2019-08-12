import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Main/Index.vue'
import ClinicRouter from './modules/clinic'
import DoctorRouter from './modules/doctor'
import ArticleRouter from './modules/article'
import EncyclopediaRouter from './modules/encyclopedia'
import AuthRouter from './modules/auth'
import profileRouter from './modules/profile'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  ...ClinicRouter,
  ...DoctorRouter,
  ...ArticleRouter,
  ...EncyclopediaRouter,
  ...AuthRouter,
  ...profileRouter
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

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
  linkActiveClass: 'active', // active class for non-exact links.
  linkExactActiveClass: 'active'
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
