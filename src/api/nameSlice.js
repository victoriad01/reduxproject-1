import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'dname',
  initialState: {
    name: 'Joe',
    email: 'joe@gmail.com',
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
    },

    deleteUser: (state) => (state = {}),
  },
})

export const selectUser = (state) => state.currentUser.name
export const selectUserEmail = (state) => state.currentUser.email

export const { update, deleteUser } = usersSlice.actions

export default usersSlice.reducer
