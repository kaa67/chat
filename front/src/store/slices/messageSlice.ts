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
        'tick/tick/fulfilled': (
            state: IMessageSlice,
            action: PayloadAction<ITick>,
        ) => {
            state.messages = action.payload.messages;
        },
        'user/login/fulfilled': (
            state: IMessageSlice,
            action: PayloadAction<ITick>,
        ) => {
            state.messages = action.payload.messages;
        },
        'user/register/fulfilled': (
            state: IMessageSlice,
            action: PayloadAction<ITick>,
        ) => {
            state.messages = action.payload.messages;
        },
        'message/add/fulfilled': (
            state: IMessageSlice,
            action: PayloadAction<ITick>,
        ) => {
            state.messages = action.payload.messages;
        },
        'user/logout/fulfilled': (
            state: IMessageSlice,
            action: PayloadAction<ITick>,
        ) => {
            state.messages = action.payload.messages;
        },
        'user/update/fulfilled': (
            state: IMessageSlice,
            action: PayloadAction<ITick>,
        ) => {
            state.messages = action.payload.messages;
        },
    },
});

export const { setMessages } = messageSlice.actions;

export default messageSlice.reducer;
