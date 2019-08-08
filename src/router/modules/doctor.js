const doctorRouter = [
  {
    path: '/doctors',
    name: 'Doctors',
    component: () => import('@/views/doctors/index'),
    meta: { title: 'Vrachlar' }
  },
  {
    path: 'clinics/:id(\\d+)',
    component: () => import('@/views/doctors/show'),
    name: 'ShowDoctor',
    meta: { title: 'Show', noCache: true, activeMenu: 'roles' },
    hidden: true
  }
]

export default doctorRouter
