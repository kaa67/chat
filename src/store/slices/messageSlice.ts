import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMessage, IMessageSlice } from '../../interfaces';

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
});

export const { setMessages } = messageSlice.actions;

export default messageSlice.reducer;
