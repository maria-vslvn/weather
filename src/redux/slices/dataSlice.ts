import { createSlice } from '@reduxjs/toolkit';
import { getWeatherData } from 'api/weatherApi';

interface InitialStateProps {
  data: any;
  isDataPending: boolean;
  dataError: any;
}

const initialState: InitialStateProps = {
  data: null,
  isDataPending: false,
  dataError: null,
};

export const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeatherData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isDataPending = false;
    });
    builder.addCase(getWeatherData.pending, (state) => {
      state.isDataPending = true;
    });
    builder.addCase(getWeatherData.rejected, (state) => {
      state.isDataPending = false;
      state.dataError = null;
    });
  },
});
