/*********************************************************************************
* WEB422 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: Citlalli Melody Mastache Student ID: 126275189 Date: August 12, 2019.
*
********************************************************************************/
import React from 'react';
import Overview from './pages/Overview';
import { Route, Switch } from 'react-router-dom';
import Projects from './pages/Projects';
import Teams from './pages/Teams';
import Employees from './pages/Employees';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <Overview />
        )} />
        <Route exact path='/projects' render={() => (
          <Projects />
        )} />
        <Route exact path='/teams' render={() => (
          <Teams />
        )} />
        <Route exact path='/employees' render={() => (
          <Employees />
        )} />
        <Route component={NotFound} render={() => (
          <NotFound />
        )}
        />
      </Switch>
    );
  }
}

export default App;