import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser, IUserSlice } from '../../interfaces';

const initialState: IUserSlice = {
    profile: null,
    users: {},
};

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<IUser>) => {
            state.profile = action.payload;
        },
        setUsers: (state, action: PayloadAction<IUser[]>) => {
            action.payload?.length &&
                action.payload.forEach((u) => {
                    u.id && (state.users[u.id] = u);
                });
        },
    },
});

export const { setProfile, setUsers } = userSlice.actions;

export default userSlice.reducer;
