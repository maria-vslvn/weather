import { useEffect, useState } from 'react';
import { useAppDispatch } from '../redux/store';
import { getWeatherIcon } from '../api/weatherApi';

interface HookProps {
  iconCode: string;
}

export const useFetchIcon = ({ iconCode }: HookProps) => {
  const dispatch = useAppDispatch();
  const [iconSrc, setIconSrc] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (iconCode) {
      dispatch(getWeatherIcon(iconCode))
        .unwrap()
        .then((res) => setIconSrc(res))
        .catch((err) => setError(err));
    }
  }, [iconCode]);

  return { iconSrc, error };
};
