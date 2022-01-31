import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { Layout, Chat, Login, Profile, Register } from '../../routes';
import { fetchTick } from '../../store/thunks/tickThunk';

const App = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        setInterval(() => dispatch(fetchTick()), 2000);
    }, []);

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Chat />} />
                <Route path="login" element={<Login />} />
                <Route path="profile" element={<Profile />} />
                <Route path="register" element={<Register />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>Select menu item pls!</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    );
};

export default App;
