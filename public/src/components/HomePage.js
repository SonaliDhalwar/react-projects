import React from 'react';
import Footer from './Footer';
//import img1 from './images/PicHomePage.jpg'
//<img src="./images/PicHomePage.jpg" alt=""/>

const HomePage = () => {return(
  
  //const FinTechSolutions = () => (
  
    <div>
    <BrowserRouter>
      <div>
        <Header2 />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/services" component={Services} />
        </Switch>
      </div>
    </BrowserRouter>
   
    </div>
  );
);
}
export default HomePage;
import { NavLink } from 'react-router-dom';

const Header2 = () => (
  <header>
  <div className="header">
    <h2>FINTECH SOLUTIONS PVT LTD</h2>
    <div className="header__message">
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/Services" activeClassName="is-active" exact={true}>Services</NavLink>
    <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
    </div>
    </div>
  </header>
);