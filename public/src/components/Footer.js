
import React from 'react';
import {
  FaTwitterSquare,
  FaLinkedinInSquare
} from "react-icons/fa";
const Footer = () => {
  //const [showMediaIcons, setShowMediaIcons] = useState(false);
  return(
  <footer>
  <div className="footer">
    <b>Fintech Solutions pvt ltd </b>
    <br />               
    <br /><br />Copyright © 2021 FinTech Solutions Pvt Limited - All Rights Reserved.
    
    <div className="social-media">
    <ul className="social-media-desktop">
      <li>
        <a
          href=""
          target="">
          <FaTwitterSquare />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/troy-miranda-a5b1377/"
          target="_blank">
          <FaLinkedinInSquare  />
        </a>
      </li>
      
    </ul>
    </div>
    
    </div>
  </footer>
);
};

export default Footer;





