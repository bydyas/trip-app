import { useEffect, useState } from 'react';
import Search from '../Search';
import TripList from '../TripList';
import styles from './styles.module.css';
import AddNewTrip from '../AddNewTrip';
import mockData from '../../assets/mocks/trips.json';
import { ITripCard } from '../TripCard/interfaces';
import TodaysForecast from '../TodaysForecast';
import { useWeather } from '../../hooks/useWeather';
import { ITodaysForecast } from '../TodaysForecast/interfaces';
import Countdown from '../Countdown';
import FullForecastList from '../FullForecastList';
import { IFullForecastItem } from '../FullForecastItem/interfaces';

function App() {
  const [trips, setTrips] = useState(mockData.trips);
  const [filteredTrips, setFilteredTrips] = useState(mockData.trips);
  const { getTodaysForecastForCity, getFullForecastForCity, loading } = useWeather();
  const [todaysForecast, setTodaysForecast] = useState<ITodaysForecast>();
  const [fullForecastDays, setFullForecastDays] = useState<IFullForecastItem[]>();
  const [targetDate, setTargetDate] = useState<string>(mockData.trips[0].startDate);

  useEffect(
    () =>
      askForecast(mockData.trips[0].city, mockData.trips[0].startDate, mockData.trips[0].endDate),
    [],
  );

  const searchTripByCity = (city: string): void => {
    if (!city) {
      setFilteredTrips(trips);
    } else {
      setFilteredTrips(
        trips.filter((trip) => trip.city.toLowerCase().includes(city.toLowerCase())),
      );
    }
  };

  const addTrip = (newTrip: ITripCard) => {
    const doesExistThisTrip = !!trips.find(
      (trip) => trip.startDate === newTrip.startDate && trip.endDate === newTrip.endDate,
    );

    if (doesExistThisTrip) {
      alert(`Trip (${newTrip.city}[${newTrip.startDate} - ${newTrip.endDate}]) already exists!`);
    } else {
      const updatedTrips = [...trips, newTrip].sort((a, b) =>
        a.startDate > b.startDate ? 1 : b.startDate > a.startDate ? -1 : 0,
      );
      setTrips(updatedTrips);
      setFilteredTrips(updatedTrips);
    }
  };

  const askForecast = (city: string, startDate: string, endDate: string) => {
    const fetchTodayskForecast = async () => await getTodaysForecastForCity(city);
    fetchTodayskForecast().then((forecast) => setTodaysForecast(forecast));

    const fetchFullForecast = async () => await getFullForecastForCity(city, startDate, endDate);
    fetchFullForecast().then((forecast) => setFullForecastDays(forecast));
  };

  const runCountdownTimer = (date: string) => setTargetDate(date);

  return (
    <>
      <div id="app-modal" />
      <div className={styles.app}>
        <main className={styles.main}>
          <header className={styles.header}>
            <h1 className={styles.heading}>
              Weather <span>Forecast</span>
            </h1>
          </header>
          <Search searchTripByCity={searchTripByCity} />
          <div className={styles.trips}>
            <TripList
              trips={filteredTrips}
              askForecast={askForecast}
              runCountdownTimer={runCountdownTimer}
            />
            <AddNewTrip addTrip={addTrip} />
          </div>
          {fullForecastDays?.length && (
            <FullForecastList fullForecastDays={fullForecastDays as IFullForecastItem[]} />
          )}
        </main>
        <aside className={styles.sidebar}>
          {loading ? 'Pending . . .' : <TodaysForecast {...(todaysForecast as ITodaysForecast)} />}
          <Countdown targetDate={targetDate} />
        </aside>
      </div>
    </>
  );
}

export default App;
