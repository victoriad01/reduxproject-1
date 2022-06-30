import { configureStore } from '@reduxjs/toolkit'
import mynameOver from './nameSlice'

export const store = configureStore({
  reducer: {
    currentUser: mynameOver,
  },
})
