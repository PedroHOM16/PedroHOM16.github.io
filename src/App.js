import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HaveFun from './pages/HaveFun';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
// import Resume from './pages/Resume';
import Projects from './pages/Projects';
import './App.css';
import PortProvider from './context/PortProvider';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <PortProvider>
          <Switch>
            <Route exact path="/havfun" component={ HaveFun } />
            <Route path="/aboutme" component={ AboutMe } />
            <Route path="/projects" component={ Projects } />
            {/* <Route path="/projects" component={ Projects } /> */}
            <Route path="/" component={ Home } />
          </Switch>
        </PortProvider>
      </BrowserRouter>
    )}
}

export default App;
