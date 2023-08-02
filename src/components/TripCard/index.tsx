import { FC } from 'react';
import { ITripCard } from './interfaces';
import styles from './styles.module.css';

const TripCard: FC<ITripCard> = ({ id, city, URL, startDate, endDate }) => {
  return (
    <li className={styles.card} onClick={() => console.log(id)}>
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
