import request from '@/utils/request'

export function index(query) {
  return request({
    url: '/pages',
    method: 'get',
    params: query
  })
}

export function show(id, includePermissions = false) {
  let includeQuery = ''
  if (includePermissions) {
    includeQuery = '?include=Permissions'
  }
  return request({
    url: '/pages/' + id + includeQuery,
    method: 'get'
  })
}

export function store(role) {
  const dataJSON = JSON.parse(JSON.stringify(role))
  return request({
    url: 'pages?include=Permissions',
    method: 'post',
    data: dataJSON
  })
}

export function update(role) {
  return request({
    url: 'pages/' + role.id,
    method: 'patch',
    data: role
  })
}

export function destroy(role_id) {
  return request({
    url: '/pages/' + role_id,
    method: 'delete'
  })
}

export function bulk(type, list) {
  const dataJSON = JSON.parse(JSON.stringify(list))
  return request({
    url: '/pages/bulk?type=' + type,
    method: 'post',
    data: dataJSON
  })
}
