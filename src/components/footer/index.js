import React from 'react';
import './footer.css';
import {DATE_UPDATED, EMAIL, LINKS} from "../../content";

function Footer() {
  return (
      <div className={'footer'}>
        <p>Created by Sofie Duntugan | Updated {DATE_UPDATED}</p>
        <p>Feel free to reach out at <a href={LINKS.EMAIL}>{EMAIL}</a>!</p>
      </div>
  );
}

export default Footer;
