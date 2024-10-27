import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';

import { useDispatch } from 'react-redux';
import { fetchExchangeCurrency } from 'reduxState/operations';

export const ExchangeForm = () => {
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.currency;
    const [amount, from, , to] = value.split(' ');

    dispatch(
      fetchExchangeCurrency({
        to,
        from,
        amount,
      }),
    );
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        title="Request format 15 USD in UAH"
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
        placeholder="15 USD in UAH"
        name="currency"
        type="text"
        required
        className={styles.input}
      />
    </form>
  );
};
