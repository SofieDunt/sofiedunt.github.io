import React, { useEffect, useState } from 'react';
import './banner.css';
import {ABOUT_ME, LINKS, TITLES} from "../../content";

function Banner() {
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
    }

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

      <div className="about-container">
        <p>{ABOUT_ME}</p>
      </div>

      <div className="contacts">
        <a href={LINKS.EMAIL}>
          <img src="https://img.icons8.com/material-rounded/96/ffffff/mail.png"
               alt="E-mail"/>
        </a>
        <a href={LINKS.GITHUB}>
          <img src="https://img.icons8.com/ios-glyphs/480/ffffff/github.png"
               alt="Github"/>
        </a>
      </div>
    </div>
  );
}

export default Banner;
