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

  const getFullForecastForCity = useCallback(async (city: string, date1: string, date2: string) => {
    try {
      setError(false);
      setLoading(true);
      const res = await fetch(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/${city}/${date1}/${date2}?unitGroup=metric&include=days&key=${
          import.meta.env.VITE_API_KEY
        }&contentType=json`,
      );

      const { days } = await res.json();
      setLoading(false);

      return _parseDays(days);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  }, []);

  const _parseDays = (days: any) => {
    return days.map((day: any) => {
      return {
        dayOfWeek: new Date(day.datetime).toLocaleDateString('en-US', {
          weekday: 'long',
        }),
        tempmax: day.tempmax,
        tempmin: day.tempmin,
        icon: day.icon,
      };
    });
  };

  return {
    loading,
    error,
    getTodaysForecastForCity,
    getFullForecastForCity,
  };
};
