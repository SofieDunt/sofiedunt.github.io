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

  if (active) {
    return (
        <div className={"card active-card"} onClick={() => setActive(false)}>
          <p className={"title"}><a href={props.link} target={"_blank"} rel={"noreferrer"} className={"link-title"}>{props.title}</a>&ensp;| {props.date}</p>
          {props.body}
        </div>
    );
  } else {
    return (
        <div className={"card"} onClick={() => setActive(true)}>
          <div className={"card-body"}>
            <h2 className={"title"}>{props.title}</h2>
            {props.children}
          </div>
          <span className={"card-image"}>
            <img src={props.image} alt={"Project"}/>
          </span>
        </div>
    );
  }
}

export default Project;
