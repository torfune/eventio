import { createReducer } from '@reduxjs/toolkit'
import {
  signInSuccess,
  signOut,
  signInStart,
  signInFailure,
  clearFailure,
} from './actions'
import User from '../../api/types/User'

const initialState: {
  loading: boolean
  failed: boolean
  user: User | null
} = {
  loading: false,
  failed: false,
  user: null,
}

export default createReducer(initialState, builder =>
  builder
    // Sign in - Start
    .addCase(signInStart, state => ({
      ...state,
      loading: true,
    }))

    // Sign in - Success
    .addCase(signInSuccess, (state, action) => ({
      ...state,
      loading: false,
      user: action.payload,
    }))

    // Sign in - Failure
    .addCase(signInFailure, state => ({
      ...state,
      loading: false,
      failed: true,
    }))

    // Sign out
    .addCase(signOut, state => ({
      ...state,
      loading: false,
      user: null,
    }))

    // Clear failed status
    .addCase(clearFailure, state => ({
      ...state,
      failed: false,
    }))
)
