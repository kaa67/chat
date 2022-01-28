import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUserLogin, IUserRegister } from '../../interfaces';

import http from './http';

export const userRegister = createAsyncThunk(
    'user/register',
    async (registerData: IUserRegister) => {
        const result = await http.post('register', registerData);

        return result.data;
    },
);

export const userLogin = createAsyncThunk(
    'user/login',
    async (loginData: IUserLogin) => {
        const result = await http.post('login', loginData);

        return result.data;
    },
);

export const userLogout = createAsyncThunk('user/logout', async () => {
    const result = await http.get('logout');

    return result.data;
});

export const userUpdate = createAsyncThunk(
    'user/update',
    async (name: string) => {
        const result = await http.post('update', { name });

        return result.data;
    },
);
