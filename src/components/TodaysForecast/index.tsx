import { FC } from 'react';
import { ITodaysForecast } from './interfaces';
import styles from './styles.module.css';

const TodaysForecast: FC<ITodaysForecast> = ({ city, icon, temp, day }) => {
  return (
    <div className={styles.forecast}>
      <p className={styles.day}>{day}</p>
      <div className={styles.details}>
        <img className={styles.icon} src={icon} alt={'Forecast_icon'} />
        <p className={styles.temp}>
          {temp}
          <span>℃</span>
        </p>
      </div>
      <p className={styles.city}>{city}</p>
    </div>
  );
};

export default TodaysForecast;
