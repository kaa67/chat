import * as React from 'react';
import { Outlet } from 'react-router-dom';

import Menu from '../containers/menu';
import Errors from '../containers/errors';

const Layout = () => (
    <>
        <Menu />
        <Outlet />
        <Errors />
    </>
);

export default Layout;
