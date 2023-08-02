import { FC } from 'react';
import ReactDOM from 'react-dom';
import { IModalFormProps } from './interfaces';
import styles from './styles.module.css';

const ModalForm: FC<IModalFormProps> = ({ close }) => {
  return ReactDOM.createPortal(
    <>
      <div className={styles.modalShadow}>
        <div className={styles.modal}>
          <div className={styles.modalHead}>
            <h3>Create trip</h3>
            <p onClick={close}>X</p>
          </div>
          <form action="#">
            <label>
              City:
              <select name="city">
                <option value="London">London</option>
              </select>
            </label>
          </form>
        </div>
      </div>
    </>,
    document.getElementById('app-modal') as HTMLElement,
  );
};

export default ModalForm;
