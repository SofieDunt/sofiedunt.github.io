import React, { useState } from 'react';
import './navbar.css';
import {NAME, SECTIONS} from "../../content";

function NavBar() {
  const [active, setActive] = useState('');

  return (
      <div className={'nav-container'}>
        <a href={'/'}>{NAME}</a>
        <div className={'links'}>
          {SECTIONS.map((section) => {
            return (
                <a href={`#${section}`} key={section} onClick={() => setActive(section)}>
                  <div className={`item ${active === section ? 'active' : ''}`}>{section}</div>
                </a>
            );
          })}
        </div>
      </div>
  );
}

export default NavBar;
