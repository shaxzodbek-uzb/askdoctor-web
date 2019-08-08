import { index, show, store, update as updateAPI, updateFeaturedPhoto, addPhoto, removePhoto } from '@/api/clinic'
export const actions = {
  list({ commit }, query = {}) {
    return new Promise((resolve, reject) => {
      index(query).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetch({ commit }, id) {
    const query = { include: 'City,Country,Children,Parent,Gallery,FeaturedPhoto,Translation' }
    return new Promise((resolve, reject) => {
      show(id, query).then(res => {
        commit('setClinic', res.data)
        commit('setFeaturedPhoto', res.data.FeaturedPhoto.data)
        commit('setGallery', res.data.Gallery.data)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  create({ commit }, clinic) {
    return new Promise((resolve, reject) => {
      store(clinic).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  update({ commit }, clinic) {
    return new Promise((resolve, reject) => {
      updateAPI(clinic).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  setFeaturedPhoto({ commit }, [clinic, media_id]) {
    return new Promise((resolve, reject) => {
      updateFeaturedPhoto(clinic, media_id).then(response => {
        commit('setFeaturedPhoto', response.data)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  addGalleryPhoto({ commit }, [clinic, media_id]) {
    return new Promise((resolve, reject) => {
      addPhoto(clinic, media_id).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  removeGalleryPhoto({ commit }, [clinic, media_id]) {
    return new Promise((resolve, reject) => {
      removePhoto(clinic, media_id).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  delete({ commit }, clinic_id) {

  },
  bulk({ commit }, type, list) {

  }
}
