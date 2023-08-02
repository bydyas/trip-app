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

function App() {
  const [trips, setTrips] = useState(mockData.trips);
  const [filteredTrips, setFilteredTrips] = useState(mockData.trips);
  const { getTodaysForecastForCity } = useWeather();
  const [todaysForecast, setTodaysForecast] = useState<ITodaysForecast>();

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
      setTrips([...trips, newTrip]);
      setFilteredTrips([...trips, newTrip]);
    }
  };

  const askTodaysForecast = (city: string) => {
    const fetchMockForecast = async () => await getTodaysForecastForCity(city);
    fetchMockForecast().then((forecast) => setTodaysForecast(forecast));
  };

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
            <TripList trips={filteredTrips} askTodaysForecast={askTodaysForecast} />
            <AddNewTrip addTrip={addTrip} />
          </div>
        </main>
        <aside className={styles.sidebar}>
          {todaysForecast && <TodaysForecast {...todaysForecast} />}
        </aside>
      </div>
    </>
  );
}

export default App;
