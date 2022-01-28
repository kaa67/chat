import * as React from 'react';

import { IMessageProps } from '../../interfaces';

const Message = (props: IMessageProps) => (
    <div className="message">
        <div>
            <b>{props.userName}</b>
            <small>{props.timeStamp}</small>
        </div>
        {props.message}
    </div>
);

export default Message;
