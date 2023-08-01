import { FC } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.css';

type ModalFormProps = {
  close: () => void;
};

const ModalForm: FC<ModalFormProps> = ({ close }) => {
  return ReactDOM.createPortal(
    <>
      <div className={styles.modalShadow}>
        <div className={styles.modal}>
          <div className={styles.modalHead}>
            <h3>Create trip</h3>
            <p onClick={close}>X</p>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('app-modal') as HTMLElement,
  );
};

export default ModalForm;
