export const getters = {
  getClinics: (state) => state.clinics,
  getClinic: (state) => state.clinic,
  getClinicTranslate: (state) => code => state.clinic.translate[code],
  getFeaturedPhoto: (state) => state.clinic.FeaturedPhoto.url
}
