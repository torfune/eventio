import { createAction } from '@reduxjs/toolkit'
import { AppThunk } from '..'
import Api from '../../api'
import User from '../../api/types/User'
import Router from 'next/router'
import StorageService from '../../StorageService'

// Action creators
export const signInStart = createAction('auth/signInStart')
export const signInSuccess = createAction(
  'auth/signInSuccess',
  (user: User, accessToken: string) => ({
    payload: { user, accessToken },
  })
)
export const signInFailure = createAction('auth/signInFailure')
export const signOut = createAction('auth/signOut', () => {
  StorageService.clearRefreshToken()
  Router.push('/')
  return { payload: null }
})
export const clearFailure = createAction('auth/clearFailure')

// Thunks
export const signIn = (
  email: string,
  password: string
): AppThunk => async dispatch => {
  dispatch(clearFailure())
  dispatch(signInStart())
  try {
    const { user, accessToken, refreshToken } = await Api.auth.signIn(
      email,
      password
    )
    StorageService.setRefreshToken(refreshToken)
    Router.push('/events')
    dispatch(signInSuccess(user, accessToken))
  } catch {
    dispatch(signInFailure())
  }
}

export const signInRefresh = (
  refreshToken: string
): AppThunk => async dispatch => {
  dispatch(signInStart())
  try {
    const { user, accessToken } = await Api.auth.signInRefresh(refreshToken)
    dispatch(signInSuccess(user, accessToken))
  } catch {
    dispatch(signOut())
  }
}
