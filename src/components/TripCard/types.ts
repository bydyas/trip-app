export type TripCardProps = {
  city: string;
  URL: string;
  dateRange: string;
};

export type TripCard = {
  id: number;
} & TripCardProps;
