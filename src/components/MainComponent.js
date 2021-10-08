import React, { Component } from 'react';
import About from './pages/AboutComponent';
import HowItWorks from './pages/WorkComponent';
import Contact from './pages/ContactComponent';
import Home from './HomeComponent';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  render() {
      
      const HomePage = () => {
          return (
              <Home />
          );
      };

      return (
          <div>  
              <Switch>
              <Route path='/home' component={HomePage} />
                    <Route path='/about' component={About} />
                    <Route path='/howitworks' component={HowItWorks} />
                    <Route path='/contact' component={Contact} />
                    <Redirect to='/home' />
              </Switch>   
          </div>
      );
  }
}

export default Main;