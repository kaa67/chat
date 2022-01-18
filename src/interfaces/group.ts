export interface IGroup {
    id: number;
    name: string;
    lastMessageId: number;
}

export interface IGroups {
    [key: string]: IGroup;
}

export interface IGroupSlice {
    groups: IGroups;
}
