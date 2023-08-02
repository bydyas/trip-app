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

function App() {
  const [trips, setTrips] = useState(mockData.trips);
  const [filteredTrips, setFilteredTrips] = useState(mockData.trips);
  const { getTodaysForecastForCity, loading } = useWeather();
  const [todaysForecast, setTodaysForecast] = useState<ITodaysForecast>();
  const [targetDate, setTargetDate] = useState<string>(mockData.trips[0].startDate);

  useEffect(() => {
    const fetchMockForecast = async () => await getTodaysForecastForCity(mockData.trips[0].city);
    fetchMockForecast().then((forecast) => setTodaysForecast(forecast));
  }, []);

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

  const askTodaysForecast = (city: string) => {
    const fetchMockForecast = async () => await getTodaysForecastForCity(city);
    fetchMockForecast().then((forecast) => setTodaysForecast(forecast));
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
              askTodaysForecast={askTodaysForecast}
              runCountdownTimer={runCountdownTimer}
            />
            <AddNewTrip addTrip={addTrip} />
          </div>
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
