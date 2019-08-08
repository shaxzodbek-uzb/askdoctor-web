const encyclopediaRouter = [
  {
    path: '/encyclopedia',
    name: 'Doctors',
    component: () => import('@/views/encyclopedia/index'),
    meta: { title: 'encyclopedia' }
  },
  {
    path: 'clinics/:id(\\d+)',
    component: () => import('@/views/encyclopedia/show'),
    name: 'ShowSncyclopedia',
    meta: { title: 'Show', noCache: true },
    hidden: true
  }
]

export default encyclopediaRouter
