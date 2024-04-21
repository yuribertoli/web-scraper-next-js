import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalSlice {
  login: boolean
  logout: boolean
}

const initialState: ModalSlice = {
  login: false,
  logout: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setLoginModal: (state, { payload }: PayloadAction<boolean>) => {
      state.login = payload
    },
    setLogoutModal: (state, { payload }: PayloadAction<boolean>) => {
      state.logout = payload
    },
  },
})

export const { setLoginModal, setLogoutModal } = modalSlice.actions
export default modalSlice.reducer
