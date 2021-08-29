import React from 'react';
import './navbar.css';
import {NAME} from "../../content";

function NavBar() {
  return (
      <div className={'nav-container'}>
        <a href={'/'}>{NAME}</a>
      </div>
  );
}

export default NavBar;
