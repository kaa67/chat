import * as React from 'react';
import { useSelector } from 'react-redux';

import { getIsGuest } from '../store/selectors/userSelector';

import Groups from '../containers/groups';
import Messages from '../containers/messages';

const ChatPage = () => {
    const isGuest = useSelector(getIsGuest);

    if (isGuest)
        return (
            <div className="warning">Access is restricted. Please log in</div>
        );

    return (
        <>
            <h2>ChatPage</h2>
            {isGuest ? (
                <div className="warning">
                    Access is restricted. Please log in
                </div>
            ) : (
                <>
                    <Groups />
                    <Messages />
                </>
            )}
        </>
    );
};

export default ChatPage;
