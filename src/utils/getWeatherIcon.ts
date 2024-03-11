import { faSun, faCloud, faCloudRain, faCloudMoon } from '@fortawesome/free-solid-svg-icons';

export const getWeatherIcon = (weatherIconCode: string) => {
  switch (weatherIconCode) {
    case '01d':
      return faSun;
    case '02d':
    case '03d':
    case '04d':
      return faCloud;
    case '09d':
    case '10d':
      return faCloudRain;
    case '01n':
      return faCloudMoon;
    // Add more cases for other weather conditions as needed
    default:
      return faCloudMoon;
  }
};
