import reducer, { initialState } from './reducer'
import {
  signInStart,
  signInSuccess,
  signInFailure,
  signOut,
  clearFailure,
} from './actions'
import { AnyAction } from '@reduxjs/toolkit'

describe('[reducer] auth', () => {
  const user: any = { id: 'A' }
  const accessToken = 'ACCESS_TOKEN'

  it('should return the initial state', () => {
    const state = reducer(undefined, {} as AnyAction)
    expect(state).toEqual(initialState)
  })

  it('should handle signInStart', () => {
    const state = reducer(initialState, signInStart())
    expect(state).toEqual({ ...initialState, loading: true })
  })

  it('should handle signInSuccess', () => {
    const state = reducer(
      { ...initialState, loading: true },
      signInSuccess(user, accessToken)
    )
    expect(state).toEqual({
      ...initialState,
      user,
      accessToken,
      loading: false,
    })
  })

  it('should handle signInFailure', () => {
    const state = reducer({ ...initialState, loading: true }, signInFailure())
    expect(state).toEqual({
      ...initialState,
      loading: false,
      failed: true,
    })
  })

  it('should handle signOut', () => {
    const state = reducer({ ...initialState, user, accessToken }, signOut())
    expect(state).toEqual({
      ...initialState,
      loading: false,
      user: null,
      accessToken: null,
    })
  })

  it('should handle clearFailure', () => {
    const state = reducer({ ...initialState, failed: true }, clearFailure())
    expect(state).toEqual({
      ...initialState,
      failed: false,
    })
  })
})
