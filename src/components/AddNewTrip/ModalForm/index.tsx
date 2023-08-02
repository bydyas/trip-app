import { FC, useState } from 'react';
import ReactDOM from 'react-dom';
import { IModalFormProps } from './interfaces';
import mockData from '../../../assets/mocks/cities.json';
import styles from './styles.module.css';

const ModalForm: FC<IModalFormProps> = ({ close, addTrip }) => {
  const [city, setCity] = useState<string>('');
  const [URL, setURL] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const onSelectCity = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedCity = e.target.value;
    setCity(selectedCity);
    setURL(mockData.cities.find((city) => city.name === selectedCity)!.imageURL);
  };

  const onInputStartDate = (e: React.ChangeEvent<HTMLInputElement>) => setStartDate(e.target.value);

  const onInputEndDate = (e: React.ChangeEvent<HTMLInputElement>) => setEndDate(e.target.value);

  const onCancel = () => {
    setCity('');
    setURL('');
    setStartDate('');
    setEndDate('');
    close();
  };

  const onSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTrip({
      id: Math.floor(Math.random() * (500 - 10 + 1)) + 10,
      city,
      URL,
      dateRange: startDate + '-' + endDate,
    });
    onCancel();
  };

  return ReactDOM.createPortal(
    <>
      <div className={styles.modalShadow}>
        <div className={styles.modal}>
          <div className={styles.modalHead}>
            <h3>Create trip</h3>
            <p onClick={close}>X</p>
          </div>
          <form onSubmit={onSave} action="#">
            <label>
              City:
              <select onChange={onSelectCity} name="city">
                {mockData.cities.map(({ name }) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Start date:
              <input onChange={onInputStartDate} type="date" name="dateStarts" value={startDate} />
            </label>
            <label>
              End date:
              <input onChange={onInputEndDate} type="date" name="dateStarts" value={endDate} />
            </label>
            <button onClick={onCancel} type="button">
              Cancel
            </button>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </>,
    document.getElementById('app-modal') as HTMLElement,
  );
};

export default ModalForm;
