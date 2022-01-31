import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICommonSlice, ITick } from '../../interfaces';

const initialState: ICommonSlice = {
    timestamp: 0,
    errors: [],
    tickIntervalId: null,
};

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setTimestamp: (state, action: PayloadAction<number>) => {
            state.timestamp = action.payload;
        },
        setErrors: (state, action: PayloadAction<string[]>) => {
            state.errors = action.payload;
        },
        clearErrors: (state) => {
            state.errors = [];
        },
        setTickIntervalId: (state, action: PayloadAction<number>) => {
            state.tickIntervalId = action.payload;
        },
        clearTickIntervalId: (state) => {
            state.tickIntervalId = null;
        },
    },
    extraReducers: {
        'tick/tick/fulfilled': (
            state: ICommonSlice,
            action: PayloadAction<ITick>,
        ) => {
            state.timestamp = action.payload.timestamp;
        },
        'user/login/fulfilled': (
            state: ICommonSlice,
            action: PayloadAction<ITick>,
        ) => {
            state.errors = action.payload.errors;
        },
        'user/register/fulfilled': (
            state: ICommonSlice,
            action: PayloadAction<ITick>,
        ) => {
            state.errors = action.payload.errors;
        },
        'message/add/fulfilled': (
            state: ICommonSlice,
            action: PayloadAction<ITick>,
        ) => {
            state.errors = action.payload.errors;
        },
        'user/logout/fulfilled': (state: ICommonSlice) => {
            state.errors = [];
        },
        'user/update/fulfilled': (
            state: ICommonSlice,
            action: PayloadAction<ITick>,
        ) => {
            state.errors = action.payload.errors;
        },
    },
});

export const {
    setTimestamp,
    setErrors,
    clearErrors,
    setTickIntervalId,
    clearTickIntervalId,
} = commonSlice.actions;

export default commonSlice.reducer;
