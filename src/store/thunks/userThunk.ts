import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUserLogin, IUserRegister } from '../../interfaces';

import http from './http';
import { fetchTick } from './tickThunk';

export const userRegister = createAsyncThunk(
    'user/userRegister',
    async (registerData: IUserRegister, asyncApi) => {
        await http.post('register', registerData);

        asyncApi.dispatch(fetchTick);
    },
);

export const userLogin = createAsyncThunk(
    'user/userLogin',
    async (loginData: IUserLogin, asyncApi) => {
        await http.post('login', loginData);

        asyncApi.dispatch(fetchTick);
    },
);

export const userLogout = createAsyncThunk(
    'user/userLogout',
    async (_, asyncApi) => {
        await http.get('logout');

        asyncApi.dispatch(fetchTick);
    },
);
