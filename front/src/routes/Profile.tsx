import * as React from 'react';
import { useSelector } from 'react-redux';

import { getProfile } from '../store/selectors/userSelector';

const Profile = () => {
    const profile = useSelector(getProfile);

    const [edit, setEdit] = React.useState(false);
    const [name, setName] = React.useState(profile?.name || '');

    const editTo = (on: boolean) => () => setEdit(on);

    const nameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    };

    return (
        <>
            <h2>Profile</h2>
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
                        value={profile?.email || ''}
                        id="profile_email"
                        type="email"
                        disabled
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

export default Profile;
