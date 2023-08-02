import { FC } from 'react';
import { ITripListProps } from './interfaces';
import styles from './styles.module.css';
import TripCard from '../TripCard';

const TripList: FC<ITripListProps> = ({ trips }) => {
  const renderCards = trips.map((trip) => <TripCard key={trip.id} {...trip} />);
  return <ul className={styles.list}>{trips.length ? renderCards : 'No scheduled trips'}</ul>;
};

export default TripList;
