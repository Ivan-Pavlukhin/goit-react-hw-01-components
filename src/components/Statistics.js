import React from 'react';
import '../styles/statistic.css';
import randomColor from '../random-color';

const Statistic = ({ statistical }) => (
  <section className="statistics">
    <h2 className="title">Upload stats</h2>
    <ul className="stat-list">
      {statistical.map(({ id, label, percentage }) => {
        return (
          <li
            className="item"
            key={id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

export default Statistic;
