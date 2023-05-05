import React from 'react';
import Badge, { BadgeColors } from './index';

export const DefaultBadges = {
  JAVA: { title: 'Java', color: BadgeColors.RED },
  TS: { title: 'TypeScript', color: BadgeColors.PURPLE },
  JS: { title: 'JavaScript', color: BadgeColors.GREEN },
  REACT: { title: 'React', color: BadgeColors.BLUE },
  VERTX: { title: 'Vert.x', color: BadgeColors.GREEN },
  SPRING: { title: 'Spring', color: BadgeColors.GREEN },
  R: { title: 'R', color: BadgeColors.GREEN },
  NODE: { title: 'Node.js', color: BadgeColors.GREEN },
  RESEARCH: { title: 'Research', color: BadgeColors.RED },
  PYTHON: { title: 'Python', color: BadgeColors.BLUE },
};

export function DefaultBadge(props) {
  const { badge } = props;
  return <Badge title={badge.title} color={badge.color} />;
}
