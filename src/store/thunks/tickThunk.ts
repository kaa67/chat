import { createAsyncThunk } from '@reduxjs/toolkit';

import http from './http';

export const fetchTick = createAsyncThunk('tick/fetchTick', async () => {
    const result = await http.get('tick');

    return result.data;
});
