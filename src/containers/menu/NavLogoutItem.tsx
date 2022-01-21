import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { userLogout } from '../../store/thunks/userThunk';

const NavLogoutItem = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandle = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        dispatch(userLogout());
        navigate('/');
    };

    return (
        <a className="navItem" onClick={logoutHandle}>
            Logout
        </a>
    );
};

export default NavLogoutItem;
