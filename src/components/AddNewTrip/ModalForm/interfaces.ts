import { IAddNewTripProps } from '../interfaces';

export interface IModalFormProps extends IAddNewTripProps {
  close: () => void;
}
