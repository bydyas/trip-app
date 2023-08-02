import { FC } from 'react';
import FullForecastItem from '../FullForecastItem';
import { IFullForecastListProps } from './interfaces';
import styles from './styles.module.css';

const FullForecastList: FC<IFullForecastListProps> = ({ fullForecastDays }) => {
  return (
    <div>
      <h3 className={styles.title}>Forecast for each day of the trip</h3>
      <ul className={styles.list}>
        {fullForecastDays.map((forecast, i) => (
          <FullForecastItem key={i} {...forecast} />
        ))}
      </ul>
    </div>
  );
};

export default FullForecastList;
