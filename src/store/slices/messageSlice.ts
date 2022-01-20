import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMessage, IMessageSlice, ITick } from '../../interfaces';

const initialState: IMessageSlice = {
    messages: [],
};

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setMessages: (state, action: PayloadAction<IMessage[]>) => {
            state.messages.push(...action.payload);
        },
    },
    extraReducers: {
        'tick/fetchTick/fulfilled': (
            state: IMessageSlice,
            action: PayloadAction<ITick>,
        ) => {
            state.messages = action.payload.messages;
        },
    },
});

export const { setMessages } = messageSlice.actions;

export default messageSlice.reducer;
