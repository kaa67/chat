import * as React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <>
            <h1>RegisterPage</h1>
            <form>
                <label htmlFor="register_name">Name</label>
                <br />
                <input id="register_name" type="email" />
                <br />
                <br />
                <label htmlFor="register_email">e-mail</label>
                <br />
                <input id="register_email" type="email" />
                <br />
                <br />
                <label htmlFor="register_password">Password</label>
                <br />
                <input id="register_password" type="password" />
                <br />
                <br />
                <button type="submit">Register</button>&nbsp; or{' '}
                <Link to="/login">login</Link>
            </form>
        </>
    );
};

export default RegisterPage;
