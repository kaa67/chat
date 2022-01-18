export interface IUser {
    id: null | number;
    name: null | string;
    email: null | string;
}

export interface IUsers {
    [key: string]: IUser;
}

export interface IUserSlice {
    profile: IUser | null;
    users: IUsers;
}
