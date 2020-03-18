import { createAction } from '@reduxjs/toolkit'
import { AppThunk } from '..'
import Api from '../../api'
import User from '../../api/types/User'

// Action creators
export const signInStart = createAction('auth/signInStart')
export const signInSuccess = createAction(
  'auth/signInSuccess',
  (user: User) => ({
    payload: user,
  })
)
export const signInFailure = createAction('auth/signInFailure')
export const signOut = createAction('auth/signOut')
export const clearFailure = createAction('auth/clearFailure')

// Thunks
export const signIn = (
  email: string,
  password: string
): AppThunk => async dispatch => {
  dispatch(clearFailure())
  dispatch(signInStart())
  try {
    const user = await Api.signIn(email, password)
    dispatch(signInSuccess(user))
  } catch {
    dispatch(signInFailure())
  }
}
