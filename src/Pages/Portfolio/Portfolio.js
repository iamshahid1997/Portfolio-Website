import React, { useState } from 'react';
import './Portfolio.css';
import ResumeData from '../../utils/ResumeData';
import { Grid, Tabs, Tab, Card, Typography, CardActionArea, CardMedia, CardContent, Grow, Dialog,DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

const Portfolio = () => {

  const [tabValue, setTabValue] = useState('All');
  const [projectDialog, setProjectDialog] = useState(false)


  return (
    <>
      <Grid container spacing ={1} className = "section pb_45 pt_30">

        {/* Portfolio Title */}
        <Grid item className = "Section_title mb_20" >
          <span></span>
          <h6 className = "section_title_text">Portfolio</h6>
        </Grid>

        {/* Tabs */}
        <Grid item xs = {12}>
          <Tabs  value = {tabValue} indicatorColor = 'white' className = "Custom_tabs" 
          onChange = {(event, newValue) => setTabValue(newValue)}>
            <Tab label = 'All' value = 'All' className = {tabValue === 'All' ? 'CustomTabs_item active' : 'CustomTabs_item'}/>
            {[...new Set(ResumeData.projects.map(item => item.tag))].map(tag => (
              <Tab label = {tag} value = {tag} className = {tabValue === tag ? 'CustomTabs_item active' : 'CustomTabs_item'}/>
            ))}
          </Tabs>
        </Grid>

        {/* Projects */}
        <Grid item xs = {12}>
          <Grid container spacing = {3}>
            {ResumeData.projects.map(project => (
              <>
              {tabValue === project.tag || tabValue === 'All' ? (
                <Grid item xs = {12} sm = {6} md = {4} lg = {3}>
                  <Grow in timeout = {1000}>
                    <Card className = "CustomCard" onClick = {() => setProjectDialog(project)}>
                      <CardActionArea>
                        <CardMedia className = "CustomCard_image" image= {project.img} title = {project.title}/>
                        <CardContent>
                          <Typography variant =  'body2' className = "CustomCard_title">{project.title}</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
              </>
            ))}
          </Grid>
        </Grid>
        <Dialog className = "ProjectDialog" open = {projectDialog} onClose = {() => setProjectDialog(false)}>
        <DialogTitle className = "ProjectDialog_title" onClose = {() => setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
          <img src = {projectDialog.img} alt = "" className = "ProjectDialog_img"/>
          <DialogContent>
            <Typography className = "ProjectDialog_description">
            {projectDialog.description}
            </Typography>
            
          </DialogContent>  
        <DialogActions className = "ProjectDialog_actions">
          {projectDialog?.links?.map(link => (
            <a href = {link.link} target = '_blank' rel = "noreferrer" className = "ProjectDialog_icon">{link.icon}</a>
          ))}
        </DialogActions>
      </Dialog>
      </Grid>
    </>
  );
}

export default Portfolio;