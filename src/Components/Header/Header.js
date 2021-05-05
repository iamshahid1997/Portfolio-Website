import React from 'react';
import './Header.css';
import ResumeData from '../../utils/ResumeData';
import CustomButton from '../Button/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import {  Nav, Navbar} from "react-bootstrap";

import { NavLink, withRouter } from 'react-router-dom';
import { HomeRounded, Telegram } from '@material-ui/icons';

const Socials = () => {
  return (
    <div className = "Header_right">
    {Object.keys(ResumeData.socials).map(key => (
      <a href ={ResumeData.socials[key].link} target = '_blank' rel = "noreferrer">{ResumeData.socials[key].icon}</a>
    ))}
</div>
  );
}

const header = (props) => {
  const pathName = props?.location?.pathname;

  return (
      <Navbar  expand="lg" sticky = "top" className = "Header">
        {/* Home Link */ }
        <Nav.Link as = {NavLink} to ='/' className = "Header_navlink">
          <Navbar.Brand className = "Header_home">
            <HomeRounded />
          </Navbar.Brand>
          
        </Nav.Link>

        <Navbar.Toggle />

        <Navbar.Collapse className = "Collapse_items">
          <Nav className = "Header_left">
            {/* Resume Link */ }
            <Nav.Link as ={NavLink} to =  '/' className = {pathName === '/' ? 'Header_link_active' : "Header_link"}>Resume</Nav.Link>
            {/* Portfolio Link */ }
            <Nav.Link as ={NavLink} to =  '/portfolio' className = {pathName === '/portfolio' ? 'Header_link_active' : "Header_link"}>Portfolio</Nav.Link> 
          </Nav>
          <Socials />
          <a href = "mailto:ansari.shah28@gmail.com" className = "Email_link"><CustomButton  text = "Hire Me" icon = {<Telegram />} /></a>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default withRouter(header);   