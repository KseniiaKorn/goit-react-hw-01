import PropTypes from "prop-types";
import styles from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <div className={styles.transactionHistoryContainer}>
            <table className={styles.transactionHistory}>
                <thead className={styles.transactionHistoryBoxTitle}>
                    <tr>
                        <th className={styles.transactionHistoryTitle}>Type</th>
                        <th className={styles.transactionHistoryTitle}>Amount</th>
                        <th className={styles.transactionHistoryTitle}>Currency</th>
                    </tr>
                </thead>
                <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr className={styles.transactionHistoryKey} key={id}>
                        <td className={styles.transactionHistoryCells}>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
                        <td className={styles.transactionHistoryCells}>{amount}</td>
                        <td className={styles.transactionHistoryCells}>{currency}</td>
                        </tr>
                ))}
                </tbody>
            </table>
        </div>

    );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;