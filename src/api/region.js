import request from '@/utils/request'

export function index(query) {
  return request({
    url: '/region',
    method: 'get',
    params: query
  })
}

export function show(id) {
  return request({
    url: '/region/' + id,
    method: 'get'
  })
}

export function store(role) {
  return request({
    url: 'region',
    method: 'post',
    data: role
  })
}

export function update(role) {
  return request({
    url: 'roles/' + role.id,
    method: 'patch',
    data: role
  })
}

export function destroy(role_id) {
  return request({
    url: '/region/' + role_id,
    method: 'delete'
  })
}

export function bulk(type, list) {
  const dataJSON = JSON.parse(JSON.stringify(list))
  return request({
    url: '/region/bulk?type=' + type,
    method: 'post',
    data: dataJSON
  })
}
