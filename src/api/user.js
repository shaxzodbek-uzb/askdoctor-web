import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/auth/user',
    method: 'get',
    params: { include: 'Avatar' }
  })
}

export function logout() {
  return request({
    url: '/auth/logout',
    method: 'get'
  })
}

export function getList() {
  return request({
    url: '/users',
    method: 'get'
  })
}

export function get(id, query) {
  return request({
    url: '/users/' + id,
    method: 'get',
    params: query
  })
}

export function store(user) {
  return request({
    url: '/auth/register',
    method: 'post',
    data: user
  })
}
export function update(user, params) {
  return request({
    url: 'users/' + user.id,
    method: 'patch',
    data: user,
    params: params
  })
}
