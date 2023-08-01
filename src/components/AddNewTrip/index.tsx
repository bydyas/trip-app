import { useState } from 'react';
import ModalForm from './ModalForm';
import styles from './styles.module.css';

const AddNewTrip = () => {
  const [open, setOpen] = useState<boolean>(false);

  const close = () => setOpen(false);

  return (
    <>
      <div className={styles.root} onClick={() => setOpen(true)}>
        <p>+</p>
        <p>add trip</p>
      </div>
      {open && <ModalForm close={close} />}
    </>
  );
};

export default AddNewTrip;
