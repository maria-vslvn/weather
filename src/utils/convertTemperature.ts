import { CELSIUS, FAREGHEIT } from '../constsWeather';

export const convertTemperature = (temp: number, targetUnit: string) => {
  switch (targetUnit) {
    case CELSIUS:
      return (temp - 273.15).toFixed(2);
    case FAREGHEIT:
      return (((temp - 273.15) * 9) / 5 + 32).toFixed(2);
    default:
      return temp.toFixed(2);
  }
};
