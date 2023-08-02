export interface ITripCard {
  id: string;
  city: string;
  URL: string;
  startDate: string;
  endDate: string;
}

export interface ITripCardProps extends ITripCard {
  askForecast: (city: string, startDate: string, endDate: string) => void;
  runCountdownTimer: (date: string) => void;
}
