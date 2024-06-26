import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './slices/modal'

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
