export interface ITripCard {
  id: string;
  city: string;
  URL: string;
  startDate: string;
  endDate: string;
}

export interface ITripCardProps extends ITripCard {
  askTodaysForecast: (city: string) => void;
}
