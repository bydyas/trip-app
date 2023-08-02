import { useState, useCallback } from 'react';

export const useWeather = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getTodaysForecastForCity = useCallback(async (city: string) => {
    try {
      setError(false);
      setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/${city}/today?unitGroup=metric&include=days&key=${
          import.meta.env.VITE_API_KEY
        }&contentType=json`,
      );

      const data = await res.json();

      setLoading(false);
      return {
        city: data.address,
        day: new Date(data.days[0].datetime).toLocaleDateString('en-US', {
          weekday: 'long',
        }),
        temp: data.days[0].temp,
        icon: import.meta.env.VITE_ICONS_URL + data.days[0].icon + '.svg',
      };
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  }, []);

  return {
    loading,
    error,
    getTodaysForecastForCity,
  };
};
