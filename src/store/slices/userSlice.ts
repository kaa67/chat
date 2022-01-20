import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser, IUserSlice } from '../../interfaces';

const initialState: IUserSlice = {
    profile: null,
    users: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<IUser | null>) => {
            state.profile = action.payload;
            if (
                action.payload?.id &&
                !state.users.find((u) => u.email === action.payload?.id)
            ) {
                state.users.push(action.payload);
            }
        },
        selectProfile: (state, action: PayloadAction<string>) => {
            state.profile =
                state.users.find((u) => u.email === action.payload) || null;
        },
        setUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        },
    },
});

export const { setProfile, setUsers, selectProfile } = userSlice.actions;

export default userSlice.reducer;
