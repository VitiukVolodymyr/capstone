import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    // immer library under the hood
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    signOut(state) {
      state.currentUser = null;
    },
  },
});

export const { setCurrentUser, signOut } = userSlice.actions;

export const userReducer = userSlice.reducer;
