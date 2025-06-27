import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import type { UserState } from './user.slice';

export const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  userSlice => userSlice.currentUser,
);
