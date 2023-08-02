import { FC } from 'react';
import { ITripCard } from './interfaces';
import { useWeather } from '../../hooks/useWeather';
import styles from './styles.module.css';

const TripCard: FC<ITripCard> = ({ city, URL, startDate, endDate }) => {
  const { getTodaysForecastForCity } = useWeather();

  return (
    <li
      className={styles.card}
      onClick={async () => console.log(await getTodaysForecastForCity(city))}>
      <img className={styles.image} src={URL} alt={city} />
      <div className={styles.details}>
        <h3 className={styles.city}>{city}</h3>
        <p className={styles.date}>
          {startDate} - {endDate}
        </p>
      </div>
    </li>
  );
};

export default TripCard;
