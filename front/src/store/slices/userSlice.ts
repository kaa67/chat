import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser, IUserSlice, ITick } from '../../interfaces';

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
        },
        setUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        },
    },
    extraReducers: {
        'tick/tick/fulfilled': (
            state: IUserSlice,
            action: PayloadAction<ITick>,
        ) => {
            state.profile = action.payload.profile;
            state.users = action.payload.users;
        },
        'user/login/fulfilled': (
            state: IUserSlice,
            action: PayloadAction<ITick>,
        ) => {
            state.profile = action.payload.profile;
            state.users = action.payload.users;
        },
        'user/register/fulfilled': (
            state: IUserSlice,
            action: PayloadAction<ITick>,
        ) => {
            state.profile = action.payload.profile;
            state.users = action.payload.users;
        },
        'message/add/fulfilled': (
            state: IUserSlice,
            action: PayloadAction<ITick>,
        ) => {
            state.profile = action.payload.profile;
            state.users = action.payload.users;
        },
        'user/logout/fulfilled': (
            state: IUserSlice,
            action: PayloadAction<ITick>,
        ) => {
            state.profile = action.payload.profile;
            state.users = action.payload.users;
        },
        'user/update/fulfilled': (
            state: IUserSlice,
            action: PayloadAction<ITick>,
        ) => {
            state.profile = action.payload.profile;
            state.users = action.payload.users;
        },
    },
});

export const { setProfile, setUsers } = userSlice.actions;

export default userSlice.reducer;
