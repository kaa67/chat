import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { getIsGuest } from '../store/selectors/userSelector';
import { clearErrors } from '../store/slices/commonSlice';
import { IUserRegister } from '../interfaces';
import { userRegister } from '../store/thunks/userThunk';

const Register = () => {
    const isGuest = useSelector(getIsGuest);
    const navigate = useNavigate();

    if (!isGuest) navigate('/');

    const dispatch = useDispatch();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const registerData: IUserRegister = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        };
        dispatch(userRegister(registerData));
        // navigate('/');
    };

    const clearErr = () => dispatch(clearErrors);

    return (
        <>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="register_name">Name</label>
                <br />
                <input
                    onChange={clearErr}
                    name="name"
                    id="register_name"
                    type="text"
                />
                <br />
                <br />
                <label htmlFor="register_email">e-mail</label>
                <br />
                <input
                    onChange={clearErr}
                    name="email"
                    id="register_email"
                    type="email"
                />
                <br />
                <br />
                <label htmlFor="register_password">Password</label>
                <br />
                <input
                    onChange={clearErr}
                    name="password"
                    id="register_password"
                    type="password"
                />
                <br />
                <br />
                <button type="submit">Register</button> or&nbsp;
                <Link to="/login">login</Link>
            </form>
        </>
    );
};

export default Register;
