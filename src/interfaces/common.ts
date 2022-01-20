import { IMessage } from './message';
import { IUser } from './user';

export interface ICommonSlice {
    timestamp: number;
}

export interface ITick {
    profile: IUser;
    users: IUser[];
    messages: IMessage[];
    timestamp: number;
}
