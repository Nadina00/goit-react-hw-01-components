import styles from './TransactionHistory.module.css'
import PropTypes from 'prop-types'

export const TransactionHistory = ({items}) => {
return ( <table className={styles.transactionHistory}>
<thead>
  <tr>
    <th>Type</th>
    <th>Amount</th>
    <th>Currency</th>
  </tr>
</thead>

<tbody>
  {items.map(item =>(
  <tr key = {item.id}>
    <td>{item.type}</td>
    <td>{item.amount}</td>
    <td>{item.currency}</td>
  </tr>))}
 
</tbody>
</table>)
}

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
} 