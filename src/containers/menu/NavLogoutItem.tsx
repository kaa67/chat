import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setProfile } from '../../store/slices/userSlice';

const NavLogoutItem = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandle = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        dispatch(setProfile(null));
        navigate('/', { replace: true });
    };

    return (
        <a className="navItem" onClick={logoutHandle}>
            Logout
        </a>
    );
};

export default NavLogoutItem;
