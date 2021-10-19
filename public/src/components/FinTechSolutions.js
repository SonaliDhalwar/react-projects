import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header2 from './Header2';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';



const FinTechSolutions = () => (
  <BrowserRouter>
    <div>
      <Header2 />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/services" component={ContactPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default FinTechSolutions;
