import { createAsyncThunk } from '@reduxjs/toolkit';

import http from './http';

export const messageAdd = createAsyncThunk(
    'message/add',
    async (message: string) => {
        const result = await http.post('message/add', { message });

        return result.data;
    },
);
