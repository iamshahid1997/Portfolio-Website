import React from 'react';
import './Resume.css';
import { Grid, Typography, Icon, Paper } from '@material-ui/core';
import ResumeData from '../../utils/ResumeData';
import CustomTimeline,{ CustomTimelineSeperator } from '../../Components/Timeline/Timeline';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';



const resume = () => {
  return (
    <>
      {/*About me */}
      <Grid container className = "section pb_45 pt_30">
        <Grid item className = "Section_title mb_30" >
          <span></span>
          <h6 className = "section_title_text">About Me</h6>
        </Grid>
        <Grid item xs = {12} >
          <Typography variant= "body2" className = "aboutme_text">{ResumeData.about}</Typography>
        </Grid>
      </Grid>

      {/*Resume */}
      <Grid container className = "section pb_45">
        <Grid item className = "Section_title mb_30" >
          <span></span>
          <h6 className = "section_title_text">Resume</h6>
        </Grid>

        {/*Experience and Education */}
        <Grid item xs = {12}>
          <Grid container className = "Resume_timeline">
            <Grid item sm = {12} md = {6} className = "Timeline_content">
              {/*Experience */}
              <CustomTimeline icon = {<WorkIcon />} title = "Experience" className = "Timeline_header">
              {ResumeData.experiences.map(experience => (
                <TimelineItem>
                  <CustomTimelineSeperator />
                  <TimelineContent>
                    <Typography className = "Timeline_title">{experience.title}</Typography>
                    <Typography variant = "caption" className = "Timeline_date">{experience.date}</Typography>
                    <Typography variant = "body1" className = "Timeline_field">{experience.field}</Typography>
                    <Typography variant = "body2" className = "Timeline_description">{experience.description}</Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
              </CustomTimeline> 
            </Grid>

            <Grid item sm = {12} md = {6} className = "Timeline_content">
              {/*Education */}
              <CustomTimeline icon = {<SchoolIcon />} title = "Education">
                {ResumeData.educations.map(education => (
                  <TimelineItem>
                    <CustomTimelineSeperator />
                    <TimelineContent>
                      <Typography className = "Timeline_title">{education.title}</Typography>
                      <Typography variant = "caption" className = "Timeline_date">{education.date}</Typography>
                      <Typography variant = "body1" className = "Timeline_field">{education.field}</Typography>
                      <Typography variant = "body2" className = "Timeline_course">{education.course}</Typography>
                      <Typography variant = "body2" className = "Timeline_aggregate">{education.aggregate}</Typography>
                    </TimelineContent>  
                  </TimelineItem>
                ))}

              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*Services */}
      <Grid container className = "section pb_45">
        <Grid item className = "Section_title mb_30" >
          <span></span>
          <h6 className = "section_title_text">My Services</h6>
        </Grid>
        <Grid item xs = {12}>
          <Grid container spacing ={3} justify = 'space-around'>
            {ResumeData.services.map(service => (
              <Grid item xs = {12} sm = {6} md = {4}>
                <Paper elevation = {1} className = 'service'>
                  <Icon className = 'service_icon'>{service.icon}</Icon>
                  <Typography variant = 'h6' className = "service_title">{service.title}</Typography>
                  <Typography variant = 'body2' className = "service_description">{service.description}</Typography>
                </Paper>
              </Grid>  
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/*Skills */}
      <Grid container className = "section graybg pb_45 p_50">
        <Grid item className = "Section_title mb_30" >
          <span></span>
          <h6 className = "section_title_text">Skills</h6>
        </Grid>
        <Grid item xs = {12}>
          <Grid container spacing = {3} justify = "space-between">
            {ResumeData.skills.map(skill => (
              <Grid item xs = {12} sm = {6} md = {3}>
                <Paper elevation ={1} className = "skill">
                <Typography variant = 'h6' className = "skill_title">{skill.title}</Typography>
                {skill.description.map(element => (
                  <Typography variant = "body2" className = "skill_description">
                    <TimelineDot variant = {'outlined'} className = "timeline_dot"/>
                    {element}
                  </Typography>
                ))}
                
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default resume;
