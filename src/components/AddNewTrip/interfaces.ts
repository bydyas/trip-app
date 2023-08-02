import { ITripCard } from '../TripCard/interfaces';

export interface IAddNewTripProps {
  addTrip: (newTrip: ITripCard) => void;
}
