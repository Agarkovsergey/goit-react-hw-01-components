import React from 'react';
import PropTypes from 'prop-types';

const Statiscits = ({ statistic, title }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
      {statistic.map(({ id, label, percentage }) => (
        <li className="item" key={id}>
          <span className="label">{label} </span>
          <span className="percentage">{percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statiscits.protoTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statiscits;
