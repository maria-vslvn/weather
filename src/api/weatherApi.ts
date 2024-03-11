import { createAsyncThunk } from '@reduxjs/toolkit';
import { $axios } from './axios';
import { ActionNames, API_KEY } from '../constsWeather';

export const getWeatherData = createAsyncThunk<any, any>(
  ActionNames.GET_WEATHER,
  async (city, { rejectWithValue, dispatch }) => {
    const config = {
      method: 'GET',
      url: `/data/2.5/weather?q=${city}&appid=${API_KEY}`,
    };
    try {
      return await $axios(config, dispatch);
    } catch (errors) {
      return rejectWithValue(errors);
    }
  },
);

export const getWeatherIcon = createAsyncThunk<any, string>(
  ActionNames.GET_WEATHER_ICON,
  async (iconCode, { rejectWithValue, dispatch }) => {
    const config = {
      method: 'GET',
      url: `/img/wn/${iconCode}@2x.png`,
    };
    try {
      return await $axios(config, dispatch);
    } catch (errors) {
      return rejectWithValue(errors);
    }
  },
);
