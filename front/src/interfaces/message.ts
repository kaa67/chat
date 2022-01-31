export interface IMessage {
    id: number;
    timeStamp: number;
    user_id: number;
    message: string;
}

export interface IMessageSlice {
    messages: IMessage[];
}

export interface IMessageProps {
    userName: string | number;
    timeStamp: string;
    message: string;
}
