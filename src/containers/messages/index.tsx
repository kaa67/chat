import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { getMessages } from '../../store/selectors/messageSelector';
import { getUserName } from '../../store/selectors/userSelector';
import { messageAdd } from '../../store/thunks/messageThunk';

import Message from './Message';

const Messages = () => {
    const dispatch = useDispatch();
    const messages = useSelector(getMessages);
    const userName = useSelector(getUserName);
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setMessage(e.target.value);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        dispatch(messageAdd(message));
    };

    return (
        <>
            {messages.map((message) => (
                <Message
                    key={message.id}
                    userName={userName(message['user_id'])}
                    timeStamp={moment(message.timeStamp).format(
                        'DD.MM.YYYY HH.mm.SS',
                    )}
                    message={message.message}
                />
            ))}
            <form onSubmit={handleSubmit}>
                <label htmlFor="message">Enter message</label>
                <br />
                <input
                    onChange={handleChange}
                    value={message}
                    id="message"
                    type="text"
                />
                <br />
                <br />
                <button type="submit">Send</button>
            </form>
        </>
    );
};

export default Messages;
