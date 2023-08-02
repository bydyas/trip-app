import { FC } from 'react';
import { useCountdown } from '../../hooks/useCountdown';
import { ICountdownProps } from './interfaces';
import styles from './styles.module.css';

const Countdown: FC<ICountdownProps> = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <p className={styles.timeIsUp}>it's a time to travel!</p>;
  } else {
    return (
      <ul className={styles.timer}>
        <li>
          <span className={styles.nums}>{days}</span>
          <br />
          <span className={styles.desc}>days</span>
        </li>
        <li>
          <span className={styles.nums}>{hours}</span>
          <br />
          <span className={styles.desc}>hours</span>
        </li>
        <li>
          <span className={styles.nums}>{minutes}</span>
          <br />
          <span className={styles.desc}>minutes</span>
        </li>
        <li>
          <span className={styles.nums}>{seconds}</span>
          <br />
          <span className={styles.desc}>seconds</span>
        </li>
      </ul>
    );
  }
};

export default Countdown;
