import * as React from 'react';
import { useSelector } from 'react-redux';

import { getMessages } from '../../store/selectors/messageSelector';
import { getUserName } from '../../store/selectors/userSelector';
import Message from './Message';

const Messages = () => {
    const messages = useSelector(getMessages);
    const userName = useSelector(getUserName);

    return (
        <>
            {messages.map((message) => (
                <Message
                    key={message.id}
                    userName={userName(message.id)}
                    timeStamp={message.timeStamp}
                    message={message.message}
                />
            ))}
            <form>
                <label htmlFor="message">Enter message</label>
                <br />
                <input id="message" type="text" />
                <br />
                <br />
                <button type="submit">Send</button>
            </form>
        </>
    );
};

export default Messages;
