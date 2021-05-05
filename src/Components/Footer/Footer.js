import React from 'react';
import './Footer.css';
import { Typography } from '@material-ui/core';
import ResumeData from '../../utils/ResumeData';

const footer = () => {
  return (
    <div className = "Footer">
      <div className = "Footer_left">
        <Typography className ="Footer_name">{ResumeData.name}</Typography>
      </div>
      <div className = "Footer_left">
        <Typography className ="Footer_copyrights">
          Clone idea from <a href = "http://tavonline.net/html/mat/default/index.html" target = '_blank' rel = "noreferrer">Travonline.</a>
        </Typography>
      </div>
    </div>
  );
}

export default footer;