import React, { useState } from 'react';
import { BUTTERFLIES } from '../../content';
import { DefaultBadges } from '../badge/defaults';
import Project from '../project';
import './butterflyCard.css';

function ButterflyCard() {
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <Project
      title={'Photo Editor'}
      titleBody={
        <>
          <p className={'small-text'}>Supported modifications include:</p>
          <div className={'flex-section'}>
            {BUTTERFLIES.map((butterfly, index) => {
              return (
                <button
                  key={butterfly.name}
                  className={'code-button'}
                  onClick={() => setActivePhoto(index)}
                >
                  {butterfly.name}
                </button>
              );
            })}
          </div>
          <p className={'small-text'}>...and more!</p>
        </>
      }
      description={
        <p>
          an application capable of importing images to, exporting
          images from, and modifying images in a user's photo library.
          written in Java and tested with JUnit.
        </p>
      }
      date={'June 2021'}
      image={BUTTERFLIES[activePhoto].img}
      badges={[DefaultBadges.JAVA]}
    />
  );
}

export default ButterflyCard;
