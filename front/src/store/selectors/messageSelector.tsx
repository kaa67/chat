import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../index';
import { IMessage } from '../../interfaces';

export const mess = (state: RootState) => state.messageSlice;

export const getMessages = createSelector(
    [mess],
    (m): IMessage[] => m.messages,
);

export const getLastId = createSelector(
    [getMessages],
    (m: IMessage[]): number =>
        m.reduce((prev, curr) => (curr.id > prev ? curr.id : prev), 0),
);
