import React, {useState} from 'react';
import './menu.css';
import {SECTIONS} from "../../content";

function Menu() {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
        <>
          <div className={'menu-icon'} onClick={() => setOpen(false)}>
            <div className={'bar x1'} />
            <div className={'bar x2'} />
          </div>
          <div className={'drop-down'}>
            {SECTIONS.map((section) => {
              return (
                  <a href={`#${section}`} key={section}>
                    <div className={'item'}>{section}</div>
                  </a>
              );
            })}
          </div>
        </>
    );
  } else {
    return (
        <div className={'menu-icon'}>
          <div onClick={() => setOpen(true)}>
            <div className={'bar'} />
            <div className={'bar'} />
            <div className={'bar'} />
          </div>
        </div>
    );
  }
}

export default Menu;
