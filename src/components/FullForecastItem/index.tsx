import { FC } from 'react';
import { IFullForecastItem } from './interfaces';
import styles from './styles.module.css';

const FullForecastItem: FC<IFullForecastItem> = ({ icon, dayOfWeek, tempmax, tempmin }) => {
  return (
    <li className={styles.item}>
      <p>{dayOfWeek}</p>
      <img src={icon} alt={'Forecast_icon'} />
      <p>
        {tempmax}/{tempmin}
      </p>
    </li>
  );
};

export default FullForecastItem;
