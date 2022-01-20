export interface IMessage {
    id: number;
    timeStamp: number;
    userId: number;
    message: string;
}

export interface IMessageSlice {
    messages: IMessage[];
}

export interface IMessageProps {
    userName: string | number;
    timeStamp: number;
    message: string;
}
