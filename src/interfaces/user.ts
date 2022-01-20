export interface IUser {
    id?: null | number;
    name: null | string;
    email: null | string;
}

export interface IUserSlice {
    profile: IUser | null;
    users: IUser[];
}
