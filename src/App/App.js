import React from "react";
import './App.css';

import Profile from '../Components/Profile/Profile';
import Header from '../Components/Header/Header';
import Resume from '../Pages/Resume/Resume';
import Portfolio from '../Pages/Portfolio/Portfolio';
import Footer from '../Components/Footer/Footer'; 

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';



const app = (props)=> {
  return (
    <>
      <Container className = "Top_60">
        <Grid container spacing = {5}>
          <Grid item xs = {12} sm = {12} md = {4} lg = {3}>
            <Profile />
          </Grid>
          <Grid item xs>
            <Router>
              <Header />
              <div className = "Main_content">
                <Switch>
                  <Route path = '/portfolio'>
                    <Portfolio />
                  </Route>
                  <Route path = '/'>
                    <Resume />
                  </Route>
                </Switch>
              </div>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default app;
