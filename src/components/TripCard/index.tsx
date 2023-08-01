import { FC } from 'react';
import { ITripCardProps } from './interfaces';
import styles from './styles.module.css';

const TripCard: FC<ITripCardProps> = ({ city, URL, dateRange }) => {
  return (
    <li className={styles.card}>
      <img className={styles.image} src={URL} alt={city} />
      <div className={styles.details}>
        <h3 className={styles.city}>{city}</h3>
        <p className={styles.date}>{dateRange}</p>
      </div>
    </li>
  );
};

export default TripCard;
