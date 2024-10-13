import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';

export const ExchangeForm = () => {
  const onSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.currency;
    console.log(value);
    console.log({
      to: 'UAH',
      from: 'USD',
      amount: 15,
    });
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
