import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../index';

export const getUser = (state: RootState) => state.userSlice;
export const getProfile = createSelector([getUser], (user) => user.profile);
export const getIsGuest = createSelector(
    [getProfile],
    (profile) => profile === null,
);
export const getUsers = createSelector([getUser], (user) => user.users);
