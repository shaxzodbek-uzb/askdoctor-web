const profileRouter = [
  {
    name: 'Profile',
    path: '/profile',
    component: () => import('@/views/profile/index'),
    children: [
      {
        path: 'med-cards',
        name: 'MedCards',
        component: () => import('@/views/profile/MedCards')
      },
      {
        path: 'my-doctors',
        name: 'MyDoctors',
        component: () => import('@/views/profile/MyDoctors')
      },
      {
        path: 'my-files',
        name: 'MyFiles',
        component: () => import('@/views/profile/MyFiles')
      },
      {
        path: 'account-settings',
        name: 'AccountSettings',
        component: () => import('@/views/profile/AccountSettings')
      },
      {
        path: 'payments',
        name: 'Payments',
        component: () => import('@/views/profile/Payments')
      },
      {
        path: '/profile/6',
        name: 'Profile6',
        component: () => import('@/views/profile/Profile6')
      }
    ]
  }
]

export default profileRouter
