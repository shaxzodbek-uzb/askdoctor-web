import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/main/index.vue'
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
  linkExactActiveClass: 'active',
  linkActiveClass: 'active-inner'
})

const router = createRouter()

// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index]
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters)
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1)
    subsequentMiddleware({ ...context, next: nextMiddleware })
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware]

    const context = {
      from,
      next,
      router,
      to
    }
    const nextMiddleware = nextFactory(context, middleware, 1)

    return middleware[0]({ ...context, next: nextMiddleware })
  }

  return next()
})

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
