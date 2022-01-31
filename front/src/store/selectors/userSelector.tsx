import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../index';

export const getUser = (state: RootState) => state.userSlice;
export const getProfile = createSelector([getUser], (user) => user.profile);
export const getIsGuest = createSelector([getProfile], (profile) => !profile);
export const getUsers = createSelector([getUser], (user) => user.users);
export const getUserName = createSelector(
    [getUsers],
    (users) =>
        (id: number): string =>
            users.find((user) => user.id === id)?.name || id.toString(),
);
