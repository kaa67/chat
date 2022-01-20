import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { getIsGuest } from '../store/selectors/userSelector';
import { setProfile } from '../store/slices/userSlice';
import { IUser } from '../interfaces';

const Register = () => {
    const isGuest = useSelector(getIsGuest);
    const navigate = useNavigate();

    if (!isGuest) navigate('/');

    const dispatch = useDispatch();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const profile: IUser = {
            id: Math.ceil(Math.random() * 100),
            name: formData.get('name') as string,
            email: formData.get('email') as string,
        };
        dispatch(setProfile(profile));
        navigate('/');
    };

    return (
        <>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="register_name">Name</label>
                <br />
                <input name="name" id="register_name" type="text" />
                <br />
                <br />
                <label htmlFor="register_email">e-mail</label>
                <br />
                <input name="email" id="register_email" type="email" />
                <br />
                <br />
                <label htmlFor="register_password">Password</label>
                <br />
                <input name="password" id="register_password" type="password" />
                <br />
                <br />
                <button type="submit">Register</button>&nbsp; or{' '}
                <Link to="/login">login</Link>
            </form>
        </>
    );
};

export default Register;
