import React, { useEffect, useState } from 'react';
import { ABOUT_ME, Icons, Links, TITLES } from '../../content';
import './banner.css';

const Banner = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentLen, setCurrentLen] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[currentIdx];
    const getPause = () => {
      if (currentLen === currentTitle.length) {
        setIsErasing(true);
        return 2000;
      } else if (isErasing && currentLen === 0) {
        setIsErasing(false);
        setCurrentIdx((prev) => {
          const next = prev + 1;
          if (next < TITLES.length) {
            return next;
          } else {
            return 0;
          }
        });
        return 500;
      } else {
        return 75;
      }
    };

    const timeout = setTimeout(() => {
      if (isErasing) {
        setCurrentLen((prev) => prev - 1);
      } else {
        setCurrentLen((prev) => prev + 1);
      }
    }, getPause());
    return () => clearTimeout(timeout);
  }, [currentIdx, currentLen, isErasing]);

  return (
    <div className={'banner'}>
      <div className={'greeting-container'}>
        <h1>Hi, I'm {TITLES[currentIdx].substr(0, currentLen)}|</h1>
      </div>

      <div className='about-container'>
        <p>{ABOUT_ME}</p>
      </div>

      <div className='contacts'>
        <a href={Links.EMAIL}>
          <img src={Icons.EMAIL} alt='E-mail' />
        </a>
        <a href={Links.GITHUB}>
          <img src={Icons.GITHUB} alt='Github' />
        </a>
      </div>
    </div>
  );
};

export default Banner;
