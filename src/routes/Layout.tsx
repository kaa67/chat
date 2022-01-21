import * as React from 'react';
import { Outlet } from 'react-router-dom';

import Menu from '../containers/menu';

const Layout = () => (
    <>
        <h1>
            <del>
                <small>Multirooms</small>
            </del>
            Simple Chat
        </h1>
        <Menu />
        <Outlet />
    </>
);

export default Layout;
