import React from 'react';
import {  BrowserRouter, Switch,Route, Link, NavLink} from 'react-router-dom';
//import NotFoundPage from './NotFoundPage';
//import  ContactForm from './ContactForm';
import Navbar from "./Navbar";
import CarouselContainer from "./CarouselContainer";
//import SliderData from "./SliderData";
import Footer from './Footer';
import ContactForm from './ContactForm';
//import form from '@material-ui/core/Container';
//import form from 'react-bootstrap';

//import { Row, Col, Div } from "atomize";
//import classnames from "classnames";

// reactstrap components

//import Header2 from './Header2';
//import HomePage from '../components/HomePage';
//import ContactPage from '../components/ContactPage';
//import Services from '../components/Services';








const Home = () => (
  <div>
      <Navbar />
      
      
      <div>
      <div >
      <CarouselContainer  />
   
       </div>
       </div>
      
       
    
   
    <div className="hometext">
    <div className="homeh">

    <div className="ttext">ABOUT US</div><br/><br/>
    <p >Fin Tech Solutions Private Limited is a dedicated Software contractor delivering Information Technology contracting services
     for the Electronic Collateral Management / Cloud/ Blockchain / IT recruitment verticals. Fin Tech is based in Pune (India) with
      clients based in Africa/ Europe/ Asia. We continue to remain a very small but high motivated team of developers, project managers,
       HR executives, domain experts and full stack developers. Our core forte resides in cloud configuration, block chain development, 
       Financial technology pertinent to Electronic Commodity Management, project management and IT recruitment and leasing.</p><br/>
       <br/>
       <p className="ttext3">Fin Tech Solutions  Private Limited</p> <br/>

    <div className="social">
    <div className="so">
    <a href="https://www.linkedin.com/in/troy-miranda-a5b1377/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" style={{width:"35px"}} />
    </a><br/>
    
    
      <a href="" target="_self">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" style={{width:"35px"}} /></a>
    </div>   
    </div> 
    <br/>
    <p>Value Creation through Software IP development</p><br/>
    
    
    <p className="ttext3">Fin Tech develops pertinent IP in its core domain expertise in Electronic Commodity Management with blockchain compliance.
       In that regard, we are value creators for our dedicated clients on contractual basis only.</p> <br/><br/>
       <div className="llink">
       <NavLink to="/services" activeClassName="is-active"  >SEE SERVICES</NavLink> </div>
       <h3></h3><br/>
       <p>IT Competency Guaranteed</p><br/><br/>
  
      
     <p className="ttext3">We stick to our strengths- specific and high IT skills sets in very narrow domain. In that respect,
      we endeavor to all round excel in HR recruitment, Software IP development, project management and cloud Infra configuration.
      In that regard, we are value creators for our dedicated clients on contractual basis only.</p> <br/><br/>
       <div className="llink">
       <NavLink to="/contact" activeClassName="is-active" exact={true}>CONTACT US</NavLink>
       </div>
    
       
     
     
     </div>
     </div>
    <Footer  />
    </div>
  );


const Services = () => (
  <div>
      <Navbar />
      
   <div  className="services">
   
   <p className="ttext2"> OUR SERVICES</p><br/>
      <div className="tabss">
      <div>
      
       <p className="ttext2"> Software Development Services</p>
       
            <div className="tabs">
               <div className="icon-box" >
               <div className="icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"   style={{width:"48px"}} /> 
               </div>
               <a href=""></a>
               <p>Java</p>
               </div>
        
               <div className="icon-box">
                <div className="icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" style={{ width:"48px" }} />
                </div>
                <a href=""></a>
                <p>NodeJs</p>
                </div>

                <div className="icon-box">
                <div className="icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"  style={{ width:"48px" }}/>
                </div>
                <a href=""></a>
                <p>React</p>
                </div>
            </div>
         <div className="tabs">
              <div className="icon-box">
              <div className="icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" style={{ width:"48px" }} />
              </div>
              <a href=""></a>
              <p>Html5</p>
              </div>

              <div className="icon-box">
              <div className="icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style={{ width:"48px" }} />
              </div>
              <a href=""> </a>
              <p>JavaScript</p>
              </div>

              <div className="icon-box">
              <div className="icon"><img src="./images/postman.png" style={{ width:"48px" }} alt=""/></div>
              <p>Postman</p>
              </div>
          </div>
            <div className="tabs"> 
              <div className="icon-box">
              <div className="icon"><img src="./images/maven..jpg" style={{  width:"48px"}} alt=""/></div>
              <p>Maven</p>
               </div>

              <div className="icon-box">
              <div className="icon"><img src="./images/hibernate.png" style={{ width:"48px" }} alt=""/></div>
              <p>Hibernate</p>
              </div>
        
              <div className="icon-box">
              <div className="icon"><img src="./images/spring.png" style={{width:"48px" }} alt=""/></div>
              <p>Spring Boot</p>
              <p></p>
              </div>
           </div> 
           </div>  
           <div>
           <br/>
           <br/>
         <div className="ttext2">Database management and Cloud Services </div>
         
         
           <div className="tabss1"> 
              <div className="icon-box2">
              <div className="icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" style={{width:"48px" }} alt=""/>
              </div>
              
              <p>My Sql</p>
              </div>

              <div className="icon-box2">
              <div className="icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" style={{width:"48px" }} alt=""/>
              </div>
              <h4></h4>
              <p>Sql Server</p>
              </div>
         
              <div className="icon-box2">
              <div className="icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" style={{width:"48px" }} alt=""/>
              </div>
              
              <p>Postgres</p>
              </div>
            </div> 

              <div className="tabss1"> 
              <div className="icon-box2">
              <div className="icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" style={{width:"48px" }} alt=""/>
              </div>
              
              <p>Google cloud</p>
              </div>
              <div className="icon-box2">
              <div className="icon"><img src="./images/blockchain.jpg" style={{ width: "48px" }} alt=""/></div>
          
              <p>Blockchain</p>
              </div>
           </div>

          <div className="tabss1">  
              
              <div className="icon-box2">
              <div className="icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" style={{width:"48px" }} alt=""/>
              </div>
              <p>Azure</p>
              <p>(currently pursuing course of study)</p>
              </div>
              <div className="icon-box2">
              <div className="icon"><img src="./images/hyper.png" style={{ width: "48px" }} alt=""/></div>
              <p>Hyper ledger medium proficiency</p>
              <p></p>
              </div>
              <div className="icon-box2">
              <div className="icon"><img src="./images/Ethereum.png" style={{ width: "48px" }} alt=""/></div>
              <p>Ethereum</p>
              <p>(currently pursuing course of study)</p>
              </div>
           </div>
           </div>
        
  </div>
  <br />
  <br />



    <h4></h4><br/><br/>
    
    

    <p className="ttext2">IT Recruitment</p>
     <br/><br/>

     <p>A New business process requested by a new client.  In the current IT < br />resource market,
     companies want to cut the clutter and hire seriously < br />talented and skilled resources. Skilled HR recruitment can make or break a project!</p>
     <br/>
     <div  className="simg"><br/><br/>
     <div  className="ttext1">Reviews</div><br/><br/>
     <div  className="ttext">Reviews Coming Soon!</div>
     </div>
    </div><br /><br />
    <Footer  />
  </div>
     
  );


const Contact = () => (
  
  <div>
    <Navbar />
      
     <div className="contact">
     <br />
     <br />
     <div className="ttext">CONTACT US</div>
     <br /><br />
       
  
                <p>Please contact us if you cannot find an answer to your question.</p><br />
                <p>Happy to assist you even if its not work for us.</p>
                <br />
                <div className="boxx">
                <div className="info-boxx">
                <img src="./images/add.jpg" style={{ width: "78px" }} className="info-boxxi" /><br />
                <h3>Our Address</h3>
                <p>Supermall Commercial complex, Unit no T9, SalunkeVihar road, Kondhwa, Pune. 411048</p>
              </div>
              <div className="info-boxx">
              <img src="./images/mail.png" style={{ width: "78px" }} className="info-boxxi"  /><br />
              <h3>Email Us</h3>
              <p>troy@fin-techsolutions.com</p>
            </div>
    
            <div className="info-boxx">
            <img src="./images/call.png" style={{ width: "78px" }} className="info-boxxi" /><br />
            <h3>Call Us</h3>
              <p>+91 9890444254</p>
            </div>
            </div><br /><br />
                      
                      <p className="ttext3">Let us tailor a service package that meets your needs. Tell us a little about your<br /> business
                       and we will get back to you with some ideas as soon as possible.</p><br /><br />

                    <div className="coures">
                     <div><b>FinTech Solutions Pvt Limited</b><br />
                     <br />
                        <p>Working Hours</p>
                          <br />
                          <ul>
                          <li className="ttext4"> Mon 09:00 am – 05:00 pm</li><br />

                          <li className="ttext5">Tue 09:00 am – 05:00 pm</li><br />

                          <li className="ttext4">Wed 09:00 am – 05:00 pm</li><br />

                          <li className="ttext5">Thu 09:00 am – 05:00 pm</li><br />

                          <li className="ttext4">Fri 09:00 am – 05:00 pm</li><br />

                          <li className="ttext5">Sat Closed</li><br />

                          <li className="ttext4">Sun Closed</li>
                          <br />
     
                         <li className="ttext5">Monday - Friday: 9am - 5pm</li><br />

                         <li className="ttext4">Saturday - Sunday: Closed</li>

                         </ul> 
                      </div>
                      <div><br /><br /> <ContactForm /></div>
                   </div>
             
    </div>
     <br /><br />
     <Footer  />
    </div>
  );
  

const FinTechSolutions = () => (
  <div>
  <BrowserRouter>
    <Switch>
    <Route path="/" component={Home} exact={true} />
    <Route path="/contact" component={Contact} exact={true} />
    <Route path="/services" component={Services} exact={true} />
    
    </Switch>
    </BrowserRouter>
  
    <div>
    
    <button>
    <a href="https://wa.me/917218287734" target="_blank"  ><img src="./images/waap.png" style={{width:"35px"}} className="floatingButton"/></a>
    </button>
    </div>
    </div>
    
  );


export default FinTechSolutions;

