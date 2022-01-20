import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout, Chat, Login, Profile, Register } from '../../routes';

const App = () => (
    <Routes>
        <Route element={<Layout />}>
            <Route index element={<Chat />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="register" element={<Register />} />
        </Route>
    </Routes>
);

export default App;
