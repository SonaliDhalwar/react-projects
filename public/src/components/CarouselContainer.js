


import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
//import { Carousel } from 'react-bootstrap';
//import img1 from './images/slider1.jpg';
//import img1 from './images/slider1.jpg';
//import img2 from './images/slider2.jpg';
//import img3 from './images/slider3.jpg';

const CarouselContainer = () => {
  return (
   <div>
   <Carousel Item Caption infiniteLoop autoPlay >
   <div className="image"> 
   <img src="../images/sliderOne.jpg" alt="technology" />
   <div  >
  
   
     <p className="ttext">WE MAKE TECHNOLOGY ACCESSIBLE!</p>
      <br/>
      <p className="ttext1"><p>PROFESSIONAL</p></p><br/>
      <p className="ttext1"><p>TECHNOLOGY VALUE</p></p><br/>
      <p className="ttext1"> <p>CREATORS</p></p>
      <br/>
      <br/>
       <p className="llink">
      <a href="http://localhost:8080" target="_self"><h3>Book Now</h3></a></p>  
      </div>  
   </div>
   <div className="image">
   <img src="../images/tech.webp" alt="technology" />
   <div  >
  
   
     <p className="ttext">WE MAKE TECHNOLOGY ACCESSIBLE!</p>
      <br/>
      <p className="ttext1"><p>PROFESSIONAL</p></p><br/>
      <p className="ttext1"><p>TECHNOLOGY VALUE</p></p><br/>
      <p className="ttext1"> <p>CREATORS</p></p>
      <br/>
      <br/>
       <p className="llink">
      <a href="http://localhost:8080" target="_self"><h3>Book Now</h3></a></p>
      
         
      </div>  
   </div>
   <div className="image">
   <img src="../images/sliderTwo.jpg" alt="technology" />
   <div  >
  
   
     <p className="ttext">WE MAKE TECHNOLOGY ACCESSIBLE!</p>
      <br/>
      <p className="ttext1"><p>PROFESSIONAL</p></p><br/>
      <p className="ttext1"><p>TECHNOLOGY VALUE</p></p><br/>
      <p className="ttext1"> <p>CREATORS</p></p>
      <br/>
      <br/>
       <p className="llink">
      <a href="http://localhost:8080" target="_self"><h3>Book Now</h3></a></p>
      
         
      </div>  
   </div>
   <div className="image">
   <img src="../images/sliderThree.jpg" alt="technology" />
   <div  >
  
   
     <p className="ttext">WE MAKE TECHNOLOGY ACCESSIBLE!</p>
      <br/>
      <p className="ttext1"><p>PROFESSIONAL</p></p><br/>
      <p className="ttext1"><p>TECHNOLOGY VALUE</p></p><br/>
      <p className="ttext1"> <p>CREATORS</p></p>
      <br/>
      <br/>
       <p className="llink">
      <a href="http://localhost:8080" target="_self"><h3>Book Now</h3></a></p>
      
         
      </div>  
   </div>
   <div className="image">
   <img src="../images/sliderFour.jpg" alt="technology" />
   <div  >
  
   
     <p className="ttext">WE MAKE TECHNOLOGY ACCESSIBLE!</p>
      <br/>
      <p className="ttext1"><p>PROFESSIONAL</p></p><br/>
      <p className="ttext1"><p>TECHNOLOGY VALUE</p></p><br/>
      <p className="ttext1"> <p>CREATORS</p></p>
      <br/>
      <br/>
       <p className="llink">
      <a href="http://localhost:8080" target="_self"><h3>Book Now</h3></a></p>
      
         
      </div>  
   </div>
   </Carousel>
   </div>

);
  };
export default CarouselContainer;