import React from 'react';
import Transaction from './Transaction';
import styles from './Transactions.module.css';

const Transactions = ({ transactionsData }) => (
  <table className={styles.transaction__history}>
    <thead className={styles.transaction__head}>
      <tr>
        <th className={styles.transaction__th}>Type</th>
        <th className={styles.transaction__th}>Amount</th>
        <th className={styles.transaction__th}>Currency</th>
      </tr>
    </thead>

    <tbody>
      <Transaction transactionsData={transactionsData} />
    </tbody>
  </table>
);

export default Transactions;
