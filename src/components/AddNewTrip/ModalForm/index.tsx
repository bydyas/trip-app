import { FC, useState } from 'react';
import ReactDOM from 'react-dom';
import { IModalFormProps } from './interfaces';
import mockData from '../../../assets/mocks/cities.json';
import styles from './styles.module.css';

const ModalForm: FC<IModalFormProps> = ({ close, addTrip }) => {
  const [city, setCity] = useState<string>(mockData.cities[0].name);
  const [URL, setURL] = useState<string>(mockData.cities[0].imageURL);
  const [startDate, setStartDate] = useState<string>(new Date().toISOString().substring(0, 10));
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
      dateRange: startDate + '  -  ' + endDate,
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
          <form onSubmit={onSave} className={styles.modalForm} action="#">
            <div className={styles.modalFormInner}>
              <label>
                City:
                <select required onChange={onSelectCity} className={styles.input} name="city">
                  {mockData.cities.map(({ name }) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Start date:
                <input
                  className={styles.input}
                  required
                  onChange={onInputStartDate}
                  type="date"
                  name="dateStarts"
                  value={startDate}
                  min={new Date().toISOString().substring(0, 10)}
                  max={new Date(new Date().setDate(new Date().getDate() + 14))
                    .toISOString()
                    .substring(0, 10)}
                />
              </label>
              <label>
                End date:
                <input
                  className={styles.input}
                  required
                  onChange={onInputEndDate}
                  type="date"
                  name="dateStarts"
                  value={endDate}
                  min={new Date(Date.parse(startDate)).toISOString().substring(0, 10)}
                  max={new Date(new Date().setDate(new Date(Date.parse(startDate)).getDate() + 14))
                    .toISOString()
                    .substring(0, 10)}
                />
              </label>
            </div>
            <div className={styles.modalBtns}>
              <button onClick={onCancel} className={styles.cancelBtn} type="button">
                Cancel
              </button>
              <button className={styles.saveBtn} type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>,
    document.getElementById('app-modal') as HTMLElement,
  );
};

export default ModalForm;
