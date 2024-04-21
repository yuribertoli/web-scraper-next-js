import { createSelector } from '@reduxjs/toolkit'
import { AppState } from '../store'

export const modalsSelector = createSelector(
  (state: AppState) => state.modal,
  (modals) => modals
)
