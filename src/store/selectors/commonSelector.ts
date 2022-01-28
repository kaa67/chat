import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../index';
import { ICommonSlice } from '../../interfaces';

export const common = (state: RootState): ICommonSlice => state.commonSlice;

export const getErrors = createSelector([common], (c): string[] => c.errors);
