import * as React from 'react';
import { useSelector } from 'react-redux';

import { getIsGuest } from '../store/selectors/userSelector';

import Messages from '../containers/messages';

const Chat = () => {
    const isGuest = useSelector(getIsGuest);

    if (isGuest)
        return (
            <div className="warning">Access is restricted. Please log in</div>
        );

    return (
        <>
            <h2>Chat</h2>
            {isGuest ? (
                <div className="warning">
                    Access is restricted. Please log in
                </div>
            ) : (
                <Messages />
            )}
        </>
    );
};

export default Chat;
