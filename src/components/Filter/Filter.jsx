import { setFilter } from 'reduxState/filterSlice';
import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'reduxState/selectors';
export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <input
      onChange={handleChange}
      placeholder="What currency are you looking for?🧐"
      className={styles.input}
      value={value}
    />
  );
};
