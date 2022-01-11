import React from 'react';
import './badge.css';

export const BadgeColors = {
  RED: 'red',
  BLUE: 'blue',
  PURPLE: 'purple',
  GREEN: 'green',
};

function Badge(props) {
  const { title, color } = props;

  return (
    <div className={`badge ${color}`}>
      <p>{title}</p>
    </div>
  );
}

export default Badge;
