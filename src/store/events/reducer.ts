import { createReducer } from '@reduxjs/toolkit'
import {
  fetchAllSuccess,
  fetchAllStart,
  selectCategory,
  selectViewMode,
  updateEvent,
  addEvent,
} from './actions'
import EventItem from '../../api/types/EventItem'

export const initialState: {
  items: EventItem[]
  itemsLoading: boolean
  itemsFetched: boolean
  viewMode: 'grid' | 'list'
  category: 'all' | 'future' | 'past'
} = {
  items: [],
  itemsLoading: false,
  itemsFetched: false,
  viewMode: 'grid',
  category: 'all',
}

type State = typeof initialState

export default createReducer(initialState, builder =>
  builder
    // Fetch all Events - Start
    .addCase(
      fetchAllStart,
      (state): State => ({
        ...state,
        itemsLoading: true,
      })
    )

    // Fetch all Events - Success
    .addCase(
      fetchAllSuccess,
      (state, action): State => ({
        ...state,
        items: action.payload,
        itemsLoading: false,
        itemsFetched: true,
      })
    )

    // Add new Event
    .addCase(
      addEvent,
      (state, action): State => ({
        ...state,
        items: [...state.items, action.payload],
      })
    )

    // Update existing Event
    .addCase(
      updateEvent,
      (state, action): State => ({
        ...state,
        items: state.items.map(event =>
          event.id === action.payload.id ? action.payload : event
        ),
      })
    )

    // Select Category
    .addCase(
      selectCategory,
      (state, action): State => ({
        ...state,
        category: action.payload,
      })
    )

    // Select View mode
    .addCase(
      selectViewMode,
      (state, action): State => ({
        ...state,
        viewMode: action.payload,
      })
    )
)
