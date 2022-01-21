import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { getIsGuest } from '../store/selectors/userSelector';
import { userLogin } from '../store/thunks/userThunk';

const Login = () => {
    const isGuest = useSelector(getIsGuest);
    const navigate = useNavigate();

    if (!isGuest) navigate('/', { replace: true });

    const dispatch = useDispatch();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        dispatch(userLogin({ email, password }));
        // navigate('/', { replace: true });
    };

    return (
        <>
            <h2>Login</h2>
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

export default Login;
