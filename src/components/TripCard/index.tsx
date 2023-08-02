import { FC } from 'react';
import { ITripCardProps } from './interfaces';
import styles from './styles.module.css';

const TripCard: FC<ITripCardProps> = ({ city, URL, startDate, endDate, askTodaysForecast }) => {
  return (
    <li className={styles.card} onClick={() => askTodaysForecast(city)}>
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
