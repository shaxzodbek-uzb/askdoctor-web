import request from '@/utils/request'

export function index(query) {
  return request({
    url: '/comment',
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
    url: '/comment/' + id + includeQuery,
    method: 'get'
  })
}

export function store(role) {
  const dataJSON = JSON.parse(JSON.stringify(role))
  return request({
    url: 'comment',
    method: 'post',
    data: dataJSON
  })
}

export function update(role) {
  return request({
    url: 'comment/' + role.id,
    method: 'patch',
    data: role
  })
}

export function destroy(role_id) {
  return request({
    url: '/comment/' + role_id,
    method: 'delete'
  })
}

export function bulk(type, list) {
  const dataJSON = JSON.parse(JSON.stringify(list))
  return request({
    url: '/comment/bulk?type=' + type,
    method: 'post',
    data: dataJSON
  })
}
