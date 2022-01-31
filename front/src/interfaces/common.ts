import { IMessage } from './message';
import { IUser } from './user';

export interface ICommonSlice {
    timestamp: number;
    errors: string[];
    tickIntervalId: number | null;
}

export interface ITick {
    profile: IUser;
    users: IUser[];
    messages: IMessage[];
    timestamp: number;
    errors: string[];
}
