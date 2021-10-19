import React from 'react';
import { NavLink } from 'react-router-dom';

const Header2 = () => (
  <header>
    <h1>Fin tech Solutions</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/Services" activeClassName="is-active" exact={true}>Services</NavLink>
    <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
  </header>
);

export default Header2;
