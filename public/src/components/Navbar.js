
import React, { useState } from "react";



import { NavLink } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div>
          <p>
          <br />
          <b><h2> FINTECH SOLUTIONS PVT Limited</h2></b>
            
          </p>
        </div>

        {/* 2nd menu part  */}
        <div
        className={
          showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
        }>
          <ul>
            <li>
              <NavLink to="/" activeClassName="is-active" exact={true}>HOME</NavLink>
            </li>
            <li>
              <NavLink to="/services" activeClassName="is-active" exact={true} >SERVICES</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="is-active" exact={true}>CONTACT US</NavLink>
            </li>
          </ul>
        </div>  
      </nav>
      </div>
  );
};

export default Navbar;
