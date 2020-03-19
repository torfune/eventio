import reducer, { initialState } from './reducer'
import {
  fetchAllStart,
  fetchAllSuccess,
  addEvent,
  updateEvent,
  selectCategory,
  selectViewMode,
} from './actions'
import { AnyAction } from '@reduxjs/toolkit'

describe('[reducer] events', () => {
  const eventItemA: any = {
    id: 'EVENT_A',
    title: 'Title Event A',
  }
  const eventItemB: any = {
    id: 'EVENT_B',
    title: 'Title Event B',
  }

  it('should return the initial state', () => {
    const state = reducer(undefined, {} as AnyAction)
    expect(state).toEqual(initialState)
  })

  it('should handle fetchAllStart', () => {
    const state = reducer(initialState, fetchAllStart())
    expect(state).toEqual({
      ...initialState,
      itemsLoading: true,
    })
  })

  it('should handle fetchAllSuccess', () => {
    const state = reducer(
      initialState,
      fetchAllSuccess([eventItemA, eventItemB])
    )
    expect(state).toEqual({
      ...initialState,
      items: [eventItemA, eventItemB],
      itemsLoading: false,
      itemsFetched: true,
    })
  })

  it('should handle addEvent', () => {
    const state = reducer(
      { ...initialState, items: [eventItemA] },
      addEvent(eventItemB)
    )
    expect(state).toEqual({
      ...initialState,
      items: [eventItemA, eventItemB],
    })
  })

  it('should handle updateEvent', () => {
    const state = reducer(
      { ...initialState, items: [eventItemA] },
      updateEvent({ ...eventItemA, title: 'New Title' })
    )
    expect(state).toEqual({
      ...initialState,
      items: [{ ...eventItemA, title: 'New Title' }],
    })
  })

  it('should handle selectCategory', () => {
    const state = reducer(initialState, selectCategory('future'))
    expect(state).toEqual({
      ...initialState,
      category: 'future',
    })
  })

  it('should handle selectViewMode', () => {
    const state = reducer(initialState, selectViewMode('list'))
    expect(state).toEqual({
      ...initialState,
      viewMode: 'list',
    })
  })
})
