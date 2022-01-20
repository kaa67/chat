import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICommonSlice, ITick } from '../../interfaces';

const initialState: ICommonSlice = {
    timestamp: 0,
};

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setTimestamp: (state, action: PayloadAction<number>) => {
            state.timestamp = action.payload;
        },
    },
    extraReducers: {
        'tick/fetchTick/fulfilled': (
            state: ICommonSlice,
            action: PayloadAction<ITick>,
        ) => {
            state.timestamp = action.payload.timestamp;
        },
    },
});

export const { setTimestamp } = commonSlice.actions;

export default commonSlice.reducer;
