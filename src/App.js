import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HaveFun from './pages/HaveFun';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
// import Resume from './pages/Resume';
import Projects from './pages/Projects';
import './App.css';
import PortProvider from './context/PortProvider';
import photo from './images/personal/perfil-1.jpeg';
import { Helmet } from 'react-helmet';


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <PortProvider>
          <Helmet>
            <title>PedroHenrique-Developer</title>
            <link rel="photo" href={photo} />
          </Helmet>

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
