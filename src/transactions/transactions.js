import PropTypes from 'prop-types';
import style from '../transactions/transactions.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={style.transaction}>
      <thead className={style.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(el => (
          <tr key={el.id} className={style.tr}>
            <td className={style.td}>{el.type}</td>
            <td className={style.td}>{el.amount}</td>
            <td className={style.td}>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
