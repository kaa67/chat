import * as React from 'react';

import { IMessageProps } from '../../interfaces';

const Message = (props: IMessageProps) => (
    <div>
        <div>
            <b>{props.userName}</b>
            {props.timeStamp}
        </div>
        {props.message}
    </div>
);

export default Message;
