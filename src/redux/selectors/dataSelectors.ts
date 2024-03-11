import { type RootState } from '../store';

export const weatherDataSelector = (state: RootState) => state.dataReducer.data;

export const isDataPendingSelector = (state: RootState) => state.dataReducer.isDataPending;
