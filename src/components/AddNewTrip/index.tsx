import { FC, useState } from 'react';
import ModalForm from './ModalForm';
import { IAddNewTripProps } from './interfaces';
import styles from './styles.module.css';

const AddNewTrip: FC<IAddNewTripProps> = ({ addTrip }) => {
  const [open, setOpen] = useState<boolean>(false);

  const close = () => setOpen(false);

  return (
    <>
      <button className={styles.root} onClick={() => setOpen(true)}>
        {open || (
          <>
            <p>+</p>
            <p>add trip</p>
          </>
        )}
      </button>
      {open && <ModalForm close={close} addTrip={addTrip} />}
    </>
  );
};

export default AddNewTrip;
