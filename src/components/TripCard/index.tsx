import { FC } from 'react';
import { TripCardProps } from './types';
import styles from './styles.module.css';

const TripCard: FC<TripCardProps> = ({ city, URL, dateRange }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={URL} alt={city} />
      <div className={styles.details}>
        <h3 className={styles.city}>{city}</h3>
        <p className={styles.date}>{dateRange}</p>
      </div>
    </div>
  );
};

export default TripCard;
