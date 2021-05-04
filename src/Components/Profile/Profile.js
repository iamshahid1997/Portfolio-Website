import React from 'react';
import './Profile.css';

import ResumeData from '../../utils/ResumeData';
import Resume from '../../assests/pdf/RESUME SHAHID.pdf';

import CustomTimeline,{ CustomTimelineSeperator } from '../Timeline/Timeline';
import DisplayPic from '../../assests/images/DisplayPic.jpg';
import CustomButton from '../../Components/Button/Button';

import { Typography } from '@material-ui/core';

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

const CustomTimelineItem = (props) => (
  <TimelineItem>
    <CustomTimelineSeperator />
    <TimelineContent className = "Timeline_content">
      <Typography className = "Timeline_text"><span>{props.title} : </span>{props.text}</Typography>
    </TimelineContent>
  </TimelineItem>
)



const profile = () => {
  return (
    <div className = "Profile">
      <div classname = "Container_shadow">
        <div className = "Profile_name">
          <Typography className = "Name">{ResumeData.name}</Typography>
          <Typography className =  "Title">{ResumeData.title}</Typography>
        </div>
        <figure className = "Profile_image">
          <img src = {DisplayPic} alt = ""/>
        </figure>
        <div className = "Profile_info">
          <CustomTimeline icon = {<PersonOutlineOutlinedIcon />}>
            <CustomTimelineItem title = 'Name' text = {ResumeData.name} />
            <CustomTimelineItem title = 'DOB' text = {ResumeData.birthday} />
            <CustomTimelineItem title = 'Address' text = {ResumeData.address} />
            <CustomTimelineItem title = 'Email' text = {ResumeData.email} />
            <CustomTimelineItem title = 'Mobile' text = {ResumeData.number} />
          </CustomTimeline>
          <div className = "Button_container">
            <a className = "Custom_button" href = {Resume} target = "_blank"><CustomButton icon = {<GetAppRoundedIcon />} text = 'Download Cv'/></a>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default profile;