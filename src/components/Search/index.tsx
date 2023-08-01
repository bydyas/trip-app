import { FC } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ISearchProps } from './interfaces';
import styles from './styles.module.css';

const Search: FC<ISearchProps> = ({ searchTripByCity }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    searchTripByCity(e.target.value);

  return (
    <div className={styles.root}>
      <FaSearch />
      <input
        onChange={handleInputChange}
        className={styles.input}
        placeholder={'Search your trip'}
        type="text"
      />
    </div>
  );
};

export default Search;
