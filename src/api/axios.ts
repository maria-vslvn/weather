import axios, { type AxiosRequestConfig } from 'axios';
import { type Dispatch } from 'redux';
import { WEATHER_API_PATH } from 'constsWeather';

export const $api = axios.create({
  baseURL: WEATHER_API_PATH,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const $axios = async (config: AxiosRequestConfig, dispatch: Dispatch) =>
  $api
    .request(config)
    .then((res) => res.data)
    .catch(async (error) => {
      if (!error.response) return Promise.reject('err_not_found');
      return Promise.reject(error);
    });
