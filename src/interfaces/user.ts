export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserRegister {
    name: string;
    email: string;
    password?: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
}

export interface IUserSlice {
    profile: IUser | null;
    users: IUser[];
}
