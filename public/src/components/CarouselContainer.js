


import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import {  NavLink} from 'react-router-dom';

//import { Carousel } from 'react-bootstrap';
//import img1 from './images/slider1.jpg';
//import img1 from './images/slider1.jpg';
//import img2 from './images/slider2.jpg';
//import img3 from './images/slider3.jpg';

const CarouselContainer = () => {
  return (
   <Carousel item Caption infiniteLoop autoPlay fade={true}>
      <div className="image"> 
         <img src="../images/sliderOne.jpg" alt="technology" />
           <p className="picHomePage">
           <p className="ttext">WE MAKE TECHNOLOGY ACCESSIBLE!</p><br/>  
           <p className="ttext1">PROFESSIONAL</p><br/>
           <p className="ttext1">TECHNOLOGY VALUE</p><br/>
           <p className="ttext1">CREATORS</p>
           <br/>
           <p className="llink">
           <NavLink to="/contact" activeClassName="is-active" ><h3>Book Now</h3></NavLink>
           </p>
           </p>
      </div>

   <div className="image">
      <img src="../images/tech.webp" alt="technology" />
         <p className="picHomePage">
         <p className="ttext">WE MAKE TECHNOLOGY ACCESSIBLE!</p>
         <br/>
         <p className="ttext1">PROFESSIONAL</p><br/>
         <p className="ttext1">TECHNOLOGY VALUE</p><br/>
         <p className="ttext1">CREATORS</p>
         <br/>
         <br/>
         <p className="llink">
         <a href="http://localhost:8080" target="_self"><h3>Book Now</h3></a></p>  
         </p>  
   </div>

     <div className="image">
        <img src="../images/sliderTwo.jpg" alt="technology" />
        <p className="picHomePage">
        <p className="ttext">WE MAKE TECHNOLOGY ACCESSIBLE!</p><br/>  
        <p className="ttext1">PROFESSIONAL</p><br/>
        <p className="ttext1">TECHNOLOGY VALUE</p><br/>
        <p className="ttext1">CREATORS</p>
        <br/>
        <p className="llink">
        <a href="http://localhost:8080" target="_self"><h3>Book Now</h3></a></p>   
        </p>  
     </div>

   <div className="image">
      <img src="../images/sliderThree.jpg" alt="technology" />
       <p className="picHomePage">
         <p className="ttext">WE MAKE TECHNOLOGY ACCESSIBLE!</p><br/>  
         <p className="ttext1">PROFESSIONAL</p><br/>
         <p className="ttext1">TECHNOLOGY VALUE</p><br/>
         <p className="ttext1">CREATORS</p>
         <p className="llink">
          <a href="http://localhost:8080" target="_self"><h3>Book Now</h3></a></p>
        </p>  
    </div>


   <div className="image">
      <img src="../images/sliderFour.jpg" alt="technology" />
       <p className="picHomePage">
        <p className="ttext">WE MAKE TECHNOLOGY ACCESSIBLE!</p>
        <br/>  
        <p className="ttext1">PROFESSIONAL</p><br/>
        <p className="ttext1">TECHNOLOGY VALUE</p><br/>
        <p className="ttext1">CREATORS</p>
        <br/>
         <p className="llink">
        <a href="http://localhost:8080" target="_self"><h3>Book Now</h3></a></p>
      </p>  
   </div>
   </Carousel>

);
  };
export default CarouselContainer;