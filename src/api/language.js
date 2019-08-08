import request from '@/utils/request'

export function index(query) {
  return request({
    url: '/language',
    method: 'get',
    params: query
  })
}

export function show(id) {
  return request({
    url: '/language/' + id,
    method: 'get'
  })
}

export function store(language) {
  return request({
    url: 'language',
    method: 'post',
    data: language
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
