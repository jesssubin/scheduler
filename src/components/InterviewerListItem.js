import React from "react"; 
import "components/InterviewerListItem.scss"

const classnames = require('classnames'); 

export default function InterviewerListItem(props) {

  const interviewerListItemClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected
  }
  )

  return (
    <li className={interviewerListItemClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {/* next line is an if statement => short circuit*/}
      {props.selected && props.name}
    </li>
  );
}

