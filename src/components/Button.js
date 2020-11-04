import React from "react";

import "components/Button.scss";

const classnames = require('classnames'); 

export default function Button(props) {
  const buttonClass = classnames("button", {
    "button--confirm": props.confirm, //props.confirm represents true
    "button--danger": props.danger //props.danger represents true 
  });

  return (
  <button 
  className={buttonClass}
  onClick={props.onClick}
  disabled={props.disabled}
  >
     {props.children}
     </button>
  );
}
