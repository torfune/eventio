import { createAction } from '@reduxjs/toolkit'
import { AppThunk } from '..'
import Api from '../../api'
import EventItem from '../../api/types/EventItem'
import EventItemCategory from '../../types/EventItemCategory'
import EventListViewMode from '../../types/EventListViewMode'

// Action creators
export const selectCategory = createAction(
  'events/selectCategory',
  (category: EventItemCategory) => ({
    payload: category,
  })
)
export const selectViewMode = createAction(
  'events/selectViewMode',
  (viewMode: EventListViewMode) => ({
    payload: viewMode,
  })
)
export const fetchStart = createAction('events/fetchStart')
export const fetchSuccess = createAction(
  'events/fetchSuccess',
  (eventItems: EventItem[]) => ({
    payload: eventItems,
  })
)

// Thunks
export const fetchAllEventItems = (): AppThunk => async dispatch => {
  dispatch(fetchStart())
  try {
    const eventItems = await Api.getAllEventItems()
    dispatch(fetchSuccess(eventItems))
  } catch (error) {
    console.error(error)
  }
}
