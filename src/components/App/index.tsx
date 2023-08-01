import { useState } from 'react';
import Search from '../Search';
import TripList from '../TripList';
import styles from './styles.module.css';
import AddNewTrip from '../AddNewTrip';

const data = [
  {
    id: 1,
    city: 'London',
    URL: 'https://i2-prod.mirror.co.uk/incoming/article28871026.ece/ALTERNATES/s1200c/0_London-at-sunset.jpg',
    dateRange: '20.01.2023 - 25.01.2023',
  },
  {
    id: 2,
    city: 'Kyiv',
    URL: 'https://cdnp.flypgs.com/files/Sehirler-long-tail/Kyiv/kyiv-bag_ms_zl_k-anit.jpg',
    dateRange: '23.01.2023 - 28.01.2023',
  },
  {
    id: 3,
    city: 'Berlin',
    URL: 'https://www.germany.travel/media/redaktion/staedte_kultur_content/Berlin_Brandenburger_Tor_im_Sonnenuntergang_Leitmotiv_German_Summer_Cities.jpg',
    dateRange: '18.05.2023 - 20.06.2023',
  },
  {
    id: 4,
    city: 'Tokyo',
    URL: 'https://www.planetware.com/wpimages/2023/05/japan-tokyo-top-attractions-intro-paragraph-sensoji-temple.jpg',
    dateRange: '03.01.2023 - 15.04.2023',
  },
];

function App() {
  const [trips, setTrips] = useState(data);

  const searchTripByCity = (city: string): void => {
    if (!city) {
      setTrips(data);
    } else {
      setTrips(trips.filter((trip) => trip.city.toLowerCase().includes(city.toLowerCase())));
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
          <TripList trips={trips} />
          <AddNewTrip />
        </div>
      </div>
    </>
  );
}

export default App;
