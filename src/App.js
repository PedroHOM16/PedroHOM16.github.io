import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
// import Projects from './pages/Projects';
import './App.css';
import PortProvider from './context/PortProvider';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <PortProvider>
          <Switch>
            <Route exact path="/home" component={ Home } />
            <Route path="/aboutme" component={ AboutMe } />
            <Route path="/resume" component={ Resume } />
            {/* <Route path="/projects" component={ Projects } /> */}
            <Route path="/" component={ Login } />
          </Switch>
        </PortProvider>
      </BrowserRouter>
    )}
}

export default App;
