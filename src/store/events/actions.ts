import { createAction } from '@reduxjs/toolkit'
import { AppThunk } from '..'
import Api from '../../api'
import EventItem from '../../api/types/EventItem'
import EventItemCategory from '../../types/EventItemCategory'
import EventListViewMode from '../../types/EventListViewMode'
import CreateEventData from '../../types/CreateEventData'
import StorageService from '../../StorageService'

// Action creators
export const selectCategory = createAction(
  'events/selectCategory',
  (category: EventItemCategory) => {
    StorageService.setCategory(category)
    return {
      payload: category,
    }
  }
)
export const selectViewMode = createAction(
  'events/selectViewMode',
  (viewMode: EventListViewMode) => {
    StorageService.setViewMode(viewMode)
    return {
      payload: viewMode,
    }
  }
)
export const fetchAllStart = createAction('events/fetchAllStart')
export const fetchAllSuccess = createAction(
  'events/fetchAllSuccess',
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
export const addEvent = createAction(
  'events/addEvent',
  (eventItem: EventItem) => ({
    payload: eventItem,
  })
)

// Thunks
export const fetchAllEventItems = (): AppThunk => async dispatch => {
  dispatch(fetchAllStart())
  try {
    const eventItems = await Api.getAllEventItems()
    dispatch(fetchAllSuccess(eventItems))
  } catch (error) {
    console.error(error)
  }
}

export const createEvent = (data: CreateEventData): AppThunk => async (
  dispatch,
  getState
) => {
  const accessToken = getState().auth.accessToken
  if (!accessToken) return

  try {
    const eventItem = await Api.createEvent(data, accessToken)
    dispatch(addEvent(eventItem))
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
