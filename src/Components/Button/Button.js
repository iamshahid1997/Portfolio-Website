import React from 'react';
import { Button } from '@material-ui/core';
import './Button.css';

const button = (props) => {
  return (
    <Button className = "Custom_Button" endIcon = {props.icon ? (<div className = "Custom_icon_container">{props.icon}</div>) : null}
    ><span className = "Button_text">{props.text}</span></Button>
  );
}

export default button;