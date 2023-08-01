import TripCard from './components/TripCard';

function App() {
  return (
    <TripCard
      city={'London'}
      URL={
        'https://i2-prod.mirror.co.uk/incoming/article28871026.ece/ALTERNATES/s1200c/0_London-at-sunset.jpg'
      }
      dateRange={'20.01.2023 - 25.01.2023'}
    />
  );
}

export default App;
