import React from 'react';
import styles from './Transactions.module.css';

const Transaction = ({ transactionsData }) =>
  transactionsData.map(item => (
    <tr key={item.id} className={styles.transaction__tr}>
      <td className={styles.transaction__item}>{item.type}</td>
      <td className={styles.transaction__item}>{item.amount}</td>
      <td className={styles.transaction__item}>{item.currency}</td>
    </tr>
  ));

export default Transaction;
