const AuthRouter = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/login')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('@/views/auth/registration')
  }
]

export default AuthRouter
