import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './auth/reducer'
import eventsReducer from './events/reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  events: eventsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
