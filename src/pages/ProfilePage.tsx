import * as React from 'react';
import { useSelector } from 'react-redux';

import { getProfile } from '../store/selectors/userSelector';

const ProfilePage = () => {
    const profile = useSelector(getProfile);

    const [edit, setEdit] = React.useState(false);
    const [name, setName] = React.useState(profile?.name || '');
    const [email, setEmail] = React.useState(profile?.email || '');

    const editTo = (on: boolean) => () => setEdit(on);

    const nameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value);
    const emailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    };

    return (
        <>
            <h2>ProfilePage</h2>
            {edit ? (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="profile_name">Name</label>
                    <br />
                    <input
                        value={name}
                        id="profile_name"
                        type="text"
                        onChange={nameChange}
                    />
                    <br />
                    <br />
                    <label htmlFor="profile_email">e-mail</label>
                    <br />
                    <input
                        value={email}
                        id="profile_email"
                        type="email"
                        onChange={emailChange}
                    />
                    <br />
                    <br />
                    <button type="submit">Update</button>&nbsp; or{' '}
                    <a onClick={editTo(false)}>Close form</a>
                </form>
            ) : (
                <>
                    <dl>
                        <dt>Name</dt>
                        <dd>{profile?.name}</dd>
                        <dt>Email</dt>
                        <dd>{profile?.email}</dd>
                    </dl>
                    <a onClick={editTo(true)}>Edit</a>
                </>
            )}
        </>
    );
};

export default ProfilePage;
