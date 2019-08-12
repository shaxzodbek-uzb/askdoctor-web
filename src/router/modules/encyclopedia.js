const encyclopediaRouter = [
  {
    path: '/encyclopedia',
    name: 'Encyclopedia',
    component: () => import('@/views/encyclopedia/index'),
    meta: { title: 'encyclopedia' }
  },
  {
    path: 'clinics/:id(\\d+)',
    component: () => import('@/views/encyclopedia/show'),
    name: 'ShowEncyclopedia',
    meta: { title: 'Show', noCache: true },
    hidden: true
  }
]

export default encyclopediaRouter
