const articleRouter = [
  {
    path: '/articles',
    name: 'Article',
    component: () => import('@/views/articles/index'),
    meta: { title: 'Клиники' }
  },
  {
    path: 'articles/:id(\\d+)',
    component: () => import('@/views/articles/show'),
    name: 'ShowArticle',
    meta: { title: 'Show', noCache: true, activeMenu: 'roles' },
    hidden: true
  }
]

export default articleRouter
