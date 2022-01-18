import * as React from 'react';

import Groups from '../containers/groups';
import Messages from '../containers/messages';

const ChatPage = () => {
    return (
        <>
            <h1>ChatPage</h1>

            <Groups />
            <Messages />
        </>
    );
};

export default ChatPage;
