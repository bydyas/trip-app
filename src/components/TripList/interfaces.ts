import { ITripCard } from '../TripCard/interfaces';

export interface ITripListProps {
  trips: ITripCard[];
  askForecast: (city: string, startDate: string, endDate: string) => void;
  runCountdownTimer: (date: string) => void;
}
