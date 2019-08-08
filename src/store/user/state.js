import { getToken } from '@/utils/auth'

export const state = {
  users: [],
  user: {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    Avatar: {
      id: 0,
      name: '',
      type: '',
      url: '',
      extension: '',
      size: 0,
      uploaded_at: {
        date: '',
        timezone_type: 0,
        timezone: ''
      }
    },
    Profile: {
      rating: '5',
      experience: 5,
      birth_date: '1999-09-09'
    }
  },
  auth_user: {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    token: getToken(),
    avatar: process.env.VUE_APP_BASE_URL + 'images/avatar.png'
  }
}
