import {createSlice} from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {

  }
})

export const UserReducer = UserSlice.reducer;
export const UserActions = UserSlice.actions

const getCurrentUser = state => state.user

export const UserSelector = {
  getCurrentUser,
}
