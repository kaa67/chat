import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { getIsGuest } from '../store/selectors/userSelector';
import { selectProfile } from '../store/slices/userSlice';

const LoginPage = () => {
    const isGuest = useSelector(getIsGuest);
    const navigate = useNavigate();

    if (!isGuest) navigate('/', { replace: true });

    const dispatch = useDispatch();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        dispatch(selectProfile(email));
    };

    return (
        <>
            <h2>LoginPage</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="login_email">e-mail</label>
                <br />
                <input name="email" id="login_email" type="email" />
                <br />
                <br />
                <label htmlFor="login_password">Password</label>
                <br />
                <input name="password" id="login_password" type="password" />
                <br />
                <br />
                <button type="submit">Login</button>&nbsp; Don&rsquo;t have your
                account yet, please &nbsp;
                <Link to="/register">register</Link>.
            </form>
        </>
    );
};

export default LoginPage;
