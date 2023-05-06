import React, { useState } from 'react';
import { DefaultBadge } from '../badge/defaults';
import './project.css';

/*
props:
- title: string
- titleBody?: JSX Element
- description: { text: string, custom: JSX Element }
- date: string
- link?: string
- image: image
- badges: DefaultBadges[]
*/
function Project(props) {
  const [active, setActive] = useState(false);
  const { title, titleBody, description, date, link, image, badges } = props;

  const onClickMe = (event) => {
    if (event.target === event.currentTarget) {
      setActive((cur) => !cur);
    }
  };

  if (active) {
    return (
      <div className={'card active-card'} onClick={() => setActive(false)}>
        <div className={'title inline-flex'}>
          <a
            href={link}
            target={'_blank'}
            rel={'noreferrer'}
            className={'link-title'}
            onClick={onClickMe}
          >
            {props.title}
          </a>
          <p>&ensp;| {date}</p>
        </div>
        <div className={'child-body'}>
          {description.custom ?
            description.custom :
            <p className={description.text.length >= 190 ? 'med-text' : null}>
              {description.text}
            </p>
          }
          <div className={'badge-bar'}>
            {badges &&
              badges.map((badge) => {
                return <DefaultBadge key={badge.title} badge={badge} />;
              })}
          </div>
        </div>
      </div>
    );
  } else if (titleBody) {
    return (
      <div className={'card title-body'} onClick={onClickMe}>
        <div className={'card-body'} onClick={onClickMe}>
          <h2 className={'title'} onClick={onClickMe}>
            {title}
          </h2>
          <div className={'child-body'}>{titleBody}</div>
        </div>
        <div className={'card-image'} onClick={() => setActive(true)}>
          <img src={image} alt={'Project'} />
        </div>
      </div>
    );
  }

  return (
    <div
      className={'card'}
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
      onClick={onClickMe}
    >
      <div className={'card-body'} onClick={onClickMe}>
        <h2 className={'title'} onClick={onClickMe}>
          {title}
        </h2>
      </div>
    </div>
  );
}

export default Project;
