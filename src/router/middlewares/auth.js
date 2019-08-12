import { getToken } from '@/utils/auth' // get token from cookie

export default function auth({ next, router }) {
  const hasToken = getToken()
  if (!hasToken) {
    return router.push({ name: 'Login' })
  }

  return next()
}
