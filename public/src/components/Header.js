
import React from 'react';
//import img1 from './images/logo.svg';
  const Header = (props) => (
    <div className="header1">
    
    
    <div className="img">
    <img src="./images/logo.svg" style={{ height: 53, width: 36 }} alt=""/>
    </div>
    <div className="header_msg">
        <h1 className="header__title">{props.title}</h1>
        {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}

        </div>
       
      </div>
      
    
  )
  
  Header.defaultProps = {
    title: 'ReactCourse'
  };
  export default Header;