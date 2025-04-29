import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './contactslice'

export const store = configureStore({
  reducer: {
    contact: contactReducer
  }
})