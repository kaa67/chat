import { createAsyncThunk } from '@reduxjs/toolkit';

import http from './http';

export const fetchTick = createAsyncThunk('tick/tick', async () => {
    const result = await http.get('tick');

    return result.data;
});
