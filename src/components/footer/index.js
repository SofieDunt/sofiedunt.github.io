import React from 'react';
import { DATE_UPDATED, EMAIL, Links } from '../../content';
import './footer.css';

const Footer = () => {
  return (
    <div className={'footer'}>
      <p>Created by Sofie Duntugan | Updated {DATE_UPDATED}</p>
      <p>
        Feel free to reach out at <a href={Links.EMAIL}>{EMAIL}</a>!
      </p>
    </div>
  );
}

export default Footer;
