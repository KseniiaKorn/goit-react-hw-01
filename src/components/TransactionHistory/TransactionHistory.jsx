import PropTypes from "prop-types";
import './TransactionHistory.css'

const TransactionHistory = ({ items }) => {
    return (
        <div className="transaction-history-container">
            <table className="transaction-history">
                <thead className="transaction-history-box-title">
                    <tr>
                        <th className="transaction-history-title">Type</th>
                        <th className="transaction-history-title">Amount</th>
                        <th className="transaction-history-title">Currency</th>
                    </tr>
                </thead>
                <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr className="transaction-history-key" key={id}>
                        <td className="transaction-history-cells">{type.charAt(0).toUpperCase() + type.slice(1)}</td>
                        <td className="transaction-history-cells">{amount}</td>
                        <td className="transaction-history-cells">{currency}</td>
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