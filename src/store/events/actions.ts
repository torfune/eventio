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
export const updateEvent = createAction(
  'events/updateEvent',
  (eventItem: EventItem) => ({
    payload: eventItem,
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

export const leaveEvent = (eventId: string): AppThunk => async (
  dispatch,
  getState
) => {
  const accessToken = getState().auth.accessToken
  if (!accessToken) return

  try {
    const eventItem = await Api.leaveEvent(eventId, accessToken)
    dispatch(updateEvent(eventItem))
  } catch (error) {
    console.error(error)
  }
}

export const joinEvent = (eventId: string): AppThunk => async (
  dispatch,
  getState
) => {
  const accessToken = getState().auth.accessToken
  if (!accessToken) return

  try {
    const eventItem = await Api.joinEvent(eventId, accessToken)
    dispatch(updateEvent(eventItem))
  } catch (error) {
    console.error(error)
  }
}
