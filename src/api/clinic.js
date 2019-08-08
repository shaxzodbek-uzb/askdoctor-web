import request from '@/utils/request'

export function index(query) {
  return request({
    url: '/clinic',
    method: 'get',
    params: query
  })
}

export function show(id, query) {
  return request({
    url: 'clinic/' + id,
    method: 'get',
    params: query
  })
}

export function store(role) {
  const dataJSON = JSON.parse(JSON.stringify(role))
  return request({
    url: 'clinic',
    method: 'post',
    data: dataJSON
  })
}

export function update(clinic) {
  return request({
    url: 'clinic/' + clinic.id,
    method: 'patch',
    data: clinic
  })
}
export function updateFeaturedPhoto(clinic, media_id) {
  return request({
    url: 'clinic/gallery/featured/' + clinic.id,
    method: 'post',
    data: { media_id: media_id }
  })
}

export function addPhoto(clinic, media_id) {
  return request({
    url: 'clinic/gallery/' + clinic.id,
    method: 'post',
    data: { media_id: media_id }
  })
}
export function removePhoto(clinic, media_id) {
  return request({
    url: 'clinic/gallery/' + clinic.id,
    method: 'delete',
    data: { media_id: media_id }
  })
}

export function destroy(role_id) {
  return request({
    url: 'clinic/' + role_id,
    method: 'delete'
  })
}

export function bulk(type, list) {
  const dataJSON = JSON.parse(JSON.stringify(list))
  return request({
    url: 'clinic/bulk?type=' + type,
    method: 'post',
    data: dataJSON
  })
}
