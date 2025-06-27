import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { UserData } from '@/utils/firebase/firebase.utils';

export interface UserState {
  readonly currentUser: UserData | null;
}
const INITIAL_STATE: UserState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    // immer library under the hood
    setCurrentUser(state, action: PayloadAction<UserData | null>) {
      state.currentUser = action.payload;
    },
    signOut(state) {
      state.currentUser = null;
    },
  },
});

export const { setCurrentUser, signOut } = userSlice.actions;

export const userReducer = userSlice.reducer;
