import React, { useState } from 'react';
import './navbar.css';
import {NAME, MenuSections, SectionNames} from "../../content";

function NavBar() {
  const [active, setActive] = useState('');

  return (
      <div className={'nav-container'}>
        <a href={'/'} className={"main-link"}>{NAME}</a>
        <div className={'links'}>
          {MenuSections.map((section) => {
            return (
                <a href={`#${section}`} key={section} onClick={() => setActive(section)}>
                  <div className={`item ${active === section ? 'active' : ''}`}>{SectionNames[section]}</div>
                </a>
            );
          })}
        </div>
      </div>
  );
}

export default NavBar;
