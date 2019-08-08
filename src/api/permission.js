import request from '@/utils/request'

export function index(query, includeRoles = false) {
  if (includeRoles) {
    query.include = 'Roles'
  }
  return request({
    url: '/permissions',
    method: 'get',
    params: query
  })
}

export function show(id, includeRoles = false) {
  const query = {}
  if (includeRoles) {
    query.include = 'Roles'
  }
  return request({
    url: '/permissions/' + id,
    method: 'get',
    params: query
  })
}

export function store(permission) {
  return request({
    url: 'permissions',
    method: 'post',
    data: permission
  })
}

export function update(permission) {
  return request({
    url: 'permissions/' + permission.id + '?include=Roles',
    method: 'patch',
    data: permission
  })
}

export function destroy(permission_id) {
  return request({
    url: '/permissions/' + permission_id,
    method: 'delete'
  })
}

export function bulk(type, list) {
  return request({
    url: '/permissions/bulk?type=' + type,
    method: 'post',
    data: list
  })
}
