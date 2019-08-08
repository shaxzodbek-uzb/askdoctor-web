import request from '@/utils/request'

export function index(query) {
  return request({
    url: '/specialty',
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
    url: '/roles/' + id + includeQuery,
    method: 'get'
  })
}

export function store(role) {
  const dataJSON = JSON.parse(JSON.stringify(role))
  return request({
    url: 'roles?include=Permissions',
    method: 'post',
    data: dataJSON
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
    url: '/roles/' + role_id,
    method: 'delete'
  })
}

export function bulk(type, list) {
  const dataJSON = JSON.parse(JSON.stringify(list))
  return request({
    url: '/roles/bulk?type=' + type,
    method: 'post',
    data: dataJSON
  })
}
