import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistic.module.css';
import randomColor from '../../random-color';

const Statistic = ({ statistical }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>Upload stats</h2>
    <ul className={styles.stat__list}>
      {statistical.map(({ id, label, percentage }) => {
        return (
          <li
            className={styles.item}
            key={id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistic.propTypes = {
  statistical: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Statistic;
