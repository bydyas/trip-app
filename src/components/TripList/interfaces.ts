import { ITripCard } from '../TripCard/interfaces';

export interface ITripListProps {
  trips: ITripCard[];
  askTodaysForecast: (city: string) => void;
}
