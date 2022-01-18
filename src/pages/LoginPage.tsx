import * as React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <>
            <h1>LoginPage</h1>
            <form>
                <label htmlFor="login_email">e-mail</label>
                <br />
                <input id="login_email" type="email" />
                <br />
                <br />
                <label htmlFor="login_password">Password</label>
                <br />
                <input id="login_password" type="password" />
                <br />
                <br />
                <button type="submit">Login</button>
            </form>

            <p>
                In case you don&rsquo;t have your account yet, please &nbsp;
                <Link to="/register">register</Link>.
            </p>
        </>
    );
};

export default LoginPage;
