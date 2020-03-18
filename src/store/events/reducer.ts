import { createReducer } from '@reduxjs/toolkit'
import {
  fetchSuccess,
  fetchStart,
  selectCategory,
  selectViewMode,
} from './actions'
import EventItem from '../../api/types/EventItem'
import filterEventItems from '../../utils/filterPastEvents'

const initialState: {
  loading: boolean
  items: EventItem[]
  filteredItems: EventItem[]
  viewMode: 'grid' | 'list'
  category: 'all' | 'future' | 'past'
} = {
  loading: false,
  items: [],
  filteredItems: [],
  viewMode: 'grid',
  category: 'all',
}

export default createReducer(initialState, builder =>
  builder
    // Fetch - Start
    .addCase(fetchStart, state => ({
      ...state,
      loading: true,
    }))

    // Fetch - Success
    .addCase(fetchSuccess, (state, action) => ({
      ...state,
      loading: false,
      items: action.payload,
      filteredItems: filterEventItems(action.payload, state.category),
    }))

    // Category - Select
    .addCase(selectCategory, (state, action) => ({
      ...state,
      category: action.payload,
      filteredItems: filterEventItems(state.items, action.payload),
    }))

    // View mode - Select
    .addCase(selectViewMode, (state, action) => ({
      ...state,
      viewMode: action.payload,
    }))
)
