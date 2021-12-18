import React, { useState } from 'react';
import './project.css';

/*
props:
- title: string
- body: JSX Element
- date: string
- link?: string
- image: image
- children: badges
 */

function Project(props) {
  const [active, setActive] = useState(false);

  const onClickMe = (event) => {
    if (event.target === event.currentTarget) {
      setActive((cur) => !cur);
    }
  }

  if (active) {
    return (
        <div className={"card active-card"} onClick={() => setActive(false)}>
          <div className={"title inline-flex"}>
            <a href={props.link} target={"_blank"} rel={"noreferrer"} className={"link-title"} onClick={onClickMe}>{props.title}</a>
            <p>&ensp;| {props.date}</p>
          </div>
          <div className={"child-body"}>{props.body}</div>
        </div>
    );
  } else {
    return (
        <div className={"card"} onClick={onClickMe}>
          <div className={"card-body"} onClick={onClickMe}>
            <h2 className={"title"}>{props.title}</h2>
            <div className={"child-body"}>{props.children}</div>
          </div>
          <span className={"card-image"}>
            <img src={props.image} alt={"Project"} onClick={onClickMe} />
          </span>
        </div>
    );
  }
}

export default Project;
