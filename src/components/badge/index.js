import React from 'react';
import './badge.css';

export const BadgeColors = {
  RED: 'red',
  BLUE: 'blue',
  PURPLE: 'purple',
  GREEN: 'green',
};

/*
props:
- color: BadgeColors
- title: string
*/
const Badge = ({ color, title }) => {
  return (
    <div className={`badge ${color}`}>
      <p>{title}</p>
    </div>
  );
};

export default Badge;
