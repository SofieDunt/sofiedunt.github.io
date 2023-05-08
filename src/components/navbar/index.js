import React, { useState, useEffect } from 'react';
import { Icons, MenuSections, NAME, SectionNames } from '../../content';
import { mobileWidth, getSectionFromHash } from '../../utils';
import './navbar.css';

const NavBar = () => {
  const [active, setActive] = useState(
    getSectionFromHash(window.location.hash),
  );
  const [isMobile, setIsMobile] = useState(mobileWidth(window.innerWidth));
  const [isMobileActive, setIsMobileActive] = useState(false);

  useEffect(() => {
    function handleResize() {
      const hasMobileWidth = mobileWidth(window.innerWidth);
      if (!isMobile && hasMobileWidth) {
        setIsMobile(true);
      } else if (isMobile && !hasMobileWidth) {
        setIsMobile(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const onClickMobileItem = (section) => {
    setActive(section);
    setIsMobileActive(false);
  };

  const MapLinks = (props) => {
    const { className } = props;
    const classNameState = (section) => {
      return `${className} ${active === section ? 'active' : ''}`;
    };
    return (
      <>
        {MenuSections.map((section) => {
          return (
            <a
              href={`#${section}`}
              key={section}
              onClick={() => onClickMobileItem(section)}
            >
              <div className={classNameState(section)}>
                {SectionNames[section]}
              </div>
            </a>
          );
        })}
      </>
    );
  };

  const DesktopMenu = () => {
    return (
      <div className={'links'}>
        <MapLinks className={'item'} />
      </div>
    );
  };

  const MobileMenu = () => {
    if (isMobileActive) {
      return (
        <div className={'mobile-menu'}>
          <div className={'links'} onClick={() => setIsMobileActive(false)}>
            <img className={'item'} src={Icons.CLOSE} alt={'menu'} />
          </div>
          <div className={'mobile-links'}>
            <MapLinks className={'mobile-item'} />
          </div>
        </div>
      );
    } else {
      return (
        <div className={'links'} onClick={() => setIsMobileActive(true)}>
          <img className={'item'} src={Icons.MENU} alt={'menu'} />
        </div>
      );
    }
  };

  return (
    <div className={'nav-container'}>
      <a href={'/'} className={'main-link'}>
        {NAME}
      </a>
      {!isMobile ? <DesktopMenu /> : <MobileMenu />}
    </div>
  );
};

export default NavBar;
