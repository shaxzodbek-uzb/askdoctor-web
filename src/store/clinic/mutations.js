export const mutations = {
  setClinics: (state, clinics) => (state.clinics = clinics),
  setClinic: (state, clinic) => {
    state.clinic.id = clinic.id
    state.clinic.city = clinic.city
    state.clinic.country = clinic.country
    state.clinic.slug = clinic.slug
    state.clinic.status = clinic.status
    state.clinic.parent_id = clinic.parent_id
    let translate = {}
    for (const index in clinic.Translation.data) {
      translate = { ...translate, ...clinic.Translation.data[index] }
    }
    state.clinic.translate = translate
  },
  setTranslate: (state, code, translate) => (state.clinic.translate[code] = translate),
  setFeaturedPhoto: (state, media) => {
    if (media) { state.clinic.FeaturedPhoto = media } else { state.clinic.FeaturedPhoto = [] }
  },
  setGallery: (state, photos) => (state.clinic.Gallery = photos)
}
