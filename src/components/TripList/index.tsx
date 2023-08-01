import { FC } from 'react';
import { ITripListProps } from './interfaces';
import styles from './styles.module.css';
import TripCard from '../TripCard';

const TripList: FC<ITripListProps> = ({ trips }) => {
  return (
    <ul className={styles.list}>
      {trips.map((item) => (
        <TripCard key={item.id} city={item.city} URL={item.URL} dateRange={item.dateRange} />
      ))}
    </ul>
  );
};

export default TripList;
