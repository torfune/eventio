import { createReducer } from '@reduxjs/toolkit'
import {
  signInSuccess,
  signOut,
  signInStart,
  signInFailure,
  clearFailure,
} from './actions'
import User from '../../api/types/User'

export const initialState: {
  loading: boolean
  failed: boolean
  user: User | null
  accessToken: string | null
} = {
  loading: false,
  failed: false,
  user: null,
  accessToken: null,
}

type State = typeof initialState

export default createReducer(initialState, builder =>
  builder
    // Sign in - Start
    .addCase(
      signInStart,
      (state): State => ({
        ...state,
        loading: true,
      })
    )

    // Sign in - Success
    .addCase(
      signInSuccess,
      (state, action): State => ({
        ...state,
        loading: false,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      })
    )

    // Sign in - Failure
    .addCase(
      signInFailure,
      (state): State => ({
        ...state,
        loading: false,
        failed: true,
      })
    )

    // Sign out
    .addCase(
      signOut,
      (state): State => ({
        ...state,
        loading: false,
        user: null,
        accessToken: null,
      })
    )

    // Clear failed status
    .addCase(
      clearFailure,
      (state): State => ({
        ...state,
        failed: false,
      })
    )
)
