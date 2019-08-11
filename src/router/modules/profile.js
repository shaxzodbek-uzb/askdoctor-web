const profileRouter = [
  {
    path: '/profile/1',
    name: 'Profile1',
    component: () => import('@/views/profile/Profile1')
  },
  {
    path: '/profile/2',
    name: 'Profile2',
    component: () => import('@/views/profile/Profile2')
  },
  {
    path: '/profile/3',
    name: 'Profile3',
    component: () => import('@/views/profile/Profile3')
  },
  {
    path: '/profile/4',
    name: 'Profile4',
    component: () => import('@/views/profile/Profile4')
  },
  {
    path: '/profile/5',
    name: 'Profile5',
    component: () => import('@/views/profile/Profile5')
  },
  {
    path: '/profile/6',
    name: 'Profile6',
    component: () => import('@/views/profile/Profile6')
  }
]

export default profileRouter
