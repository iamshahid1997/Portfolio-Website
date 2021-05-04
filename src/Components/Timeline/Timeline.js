import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import { Typography } from '@material-ui/core';


import './Timeline.css';

const customTimeline = (props) => {
  return (
       <Timeline className = "Timeline">
          {/* Item Header */}
          <TimelineItem className = "Timeline_FirstItem">
            <TimelineSeparator>
              <TimelineDot className = "Timeline_dot_header">{props.icon}</TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent><Typography variant = "h6" className = "Timeline_header">{props.title}</Typography></TimelineContent>
          </TimelineItem>
          {props.children}
       </Timeline>
  );
};

export const CustomTimelineSeperator = () => (
  <TimelineSeparator className = "Seperator_padding">
    <TimelineDot variant = {"outlined"} className = "Timeline_dot"/>
    <TimelineConnector />
  </TimelineSeparator>
)

export default customTimeline;