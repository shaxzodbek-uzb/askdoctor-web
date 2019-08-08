export const state = {
  clinics: [],
  clinic: {
    id: 0,
    city: 0,
    country: 0,
    slug: '',
    status: '',
    parent_id: 0,
    FeaturedPhoto: {
      id: 0,
      name: '',
      type: '',
      url: '',
      extension: '',
      size: 0,
      uploaded_at: {
        date: '',
        timezone_type: 0,
        timezone: ''
      }
    },
    translate: {
      uz: {
        name: '',
        title: '',
        keywords: '',
        short_description: '',
        full_description: ''
      },
      ru: {
        name: '',
        title: '',
        keywords: '',
        short_description: '',
        full_description: ''
      },
      en: {
        name: '',
        title: '',
        keywords: '',
        short_description: '',
        full_description: ''
      }
    }
  }
}
