import { useState } from 'react';
import Search from '../Search';
import TripList from '../TripList';
import styles from './styles.module.css';
import AddNewTrip from '../AddNewTrip';
import mockData from '../../assets/mocks/trips.json';
import { ITripCard } from '../TripCard/interfaces';

function App() {
  const [trips, setTrips] = useState(mockData.trips);
  const [filteredTrips, setFilteredTrips] = useState(mockData.trips);

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
    const doesExistThisTrip = !!trips.find((trip) => trip.dateRange === newTrip.dateRange);

    if (doesExistThisTrip) {
      alert(`Trip (${newTrip.city}[${newTrip.dateRange}]) already exists!`);
    } else {
      setTrips([...trips, newTrip]);
      setFilteredTrips([...trips, newTrip]);
    }
  };

  return (
    <>
      <div id="app-modal" />
      <div className="app">
        <header className={styles.header}>
          <h1 className={styles.heading}>
            Weather <span>Forecast</span>
          </h1>
        </header>
        <Search searchTripByCity={searchTripByCity} />
        <div className={styles.trips}>
          <TripList trips={filteredTrips} />
          <AddNewTrip addTrip={addTrip} />
        </div>
      </div>
    </>
  );
}

export default App;
