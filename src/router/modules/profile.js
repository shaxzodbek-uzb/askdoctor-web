
import AuthMuddleware from '../middlewares/auth'
import LogMiddleware from '../middlewares/log'

const profileRouter = [
  {
    name: 'Profile',
    path: '/profile',
    component: () => import('@/views/profile/index'),
    meta: {
      middleware: [AuthMuddleware, LogMiddleware]
    },
    children: [
      {
        path: 'med-cards',
        name: 'MedCards',
        component: () => import('@/views/profile/MedCards'),
        meta: {
          title: 'Page'
        }
      },
      {
        path: 'my-doctors',
        name: 'MyDoctors',
        component: () => import('@/views/profile/MyDoctors'),
        meta: {
          title: 'Page'
        }
      },
      {
        path: 'my-files',
        name: 'MyFiles',
        component: () => import('@/views/profile/MyFiles'),
        meta: {
          title: 'Page'
        }
      },
      {
        path: 'account-settings',
        name: 'AccountSettings',
        component: () => import('@/views/profile/AccountSettings'),
        meta: {
          title: 'Page'
        }
      },
      {
        path: 'payments',
        name: 'Payments',
        component: () => import('@/views/profile/Payments'),
        meta: {
          title: 'Page'
        }
      },
      {
        path: '/profile/6',
        name: 'Profile6',
        component: () => import('@/views/profile/Profile6'),
        meta: {
          title: 'Page'
        }
      }
    ]
  }
]

export default profileRouter
