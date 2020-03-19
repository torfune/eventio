import EventItemCategory from './types/EventItemCategory'
import EventListViewMode from './types/EventListViewMode'

const REFRESH_TOKEN = 'refresh_token'
const EVENT_CATEGORY = 'event_category'
const EVENT_VIEW_MODE = 'event_view_mode'

class StorageService {
  // Refresh token
  static setRefreshToken(refreshToken: string) {
    localStorage.setItem(REFRESH_TOKEN, refreshToken)
  }
  static getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN)
  }
  static clearRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN)
  }

  // Category
  static setCategory(category: EventItemCategory) {
    localStorage.setItem(EVENT_CATEGORY, category)
  }
  static getCategory() {
    const category = localStorage.getItem(EVENT_CATEGORY)
    switch (category) {
      case 'all':
      case 'past':
      case 'future':
        return category
    }
    return null
  }

  // View mode
  static setViewMode(viewMode: EventListViewMode) {
    localStorage.setItem(EVENT_VIEW_MODE, viewMode)
  }
  static getViewMode() {
    const viewMode = localStorage.getItem(EVENT_VIEW_MODE)
    switch (viewMode) {
      case 'grid':
      case 'list':
        return viewMode
    }
    return null
  }
}

export default StorageService
