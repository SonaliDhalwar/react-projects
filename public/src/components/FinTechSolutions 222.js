import React from 'react';
import {  BrowserRouter, Switch,Route, Link, NavLink} from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import Navbar from "./Navbar";
import Footer from './Footer';
import {Accordion, Item} from 'react-bootstrap';

//import Header2 from './Header2';
//import HomePage from '../components/HomePage';
//import ContactPage from '../components/ContactPage';
//import Services from '../components/Services';








const Home = () => (
  <div>
      <Navbar />
      
      <div className="bgimg">
      <div className="picHomePage">
      <br/>
    <div className="ttext">WE MAKE TECHNOLOGY ACCESSIBLE!</div>
    <br/>
    <div className="ttext1"><p>PROFESSIONAL</p></div><br/>
    <div className="ttext1"><p>TECHNOLOGY VALUE</p></div><br/>
    <div className="ttext1"> <p>CREATORS</p></div>
    <br/>
    <br/>
    <div className="llink">
       <a href="http://localhost:8080" target="_self"><h3>Book Now</h3></a></div>
    </div>
    </div>
    <div className="hometext">
    <div className="homeh">

    <div className="ttext">ABOUT US</div><br/><br/>
    <p>Fin Tech Solutions Private Limited is a dedicated Software contractor delivering Information Technology contracting services
     for the Electronic Collateral Management / Cloud/ Blockchain / IT recruitment verticals. Fin Tech is based in Pune (India) with
      clients based in Africa/ Europe/ Asia.We continue to remain a very small but high motivated team of developers, project managers,
       HR executives, domain experts and full stack developers. Our core forte resides in cloud configuration, block chain development, 
       Financial technology pertinent to Electronic Commodity Management, project management and IT recruitment and leasing.</p><br/>
      
       <h3>Fin Tech Solutions  Private Limited</h3> <br/>

       <div className="llink">
    <a href="https://www.linkedin.com/in/troy-miranda-a5b1377/" target="_blank">LINKEDIN PAGE</a><br/><br/>
    </div>
    <h4>Value Creation through Software IP development</h4><br/>
    
    
    <p>Fin Tech develops pertinent IP in its core domain expertise in Electronic Commodity Management with blockchain compliance.
       In that regard, we are value creators for our dedicated clients on contractual basis only.</p> <br/><br/>
       <div className="llink">
       <a href="http://localhost:8080" target="_self">SEE SERVICES</a></div>
       <h3></h3><br/>
       <h3>IT Competency Guaranteed</h3><br/><br/>
  
      
     <p>We stick to our strengths- specific and high IT skills sets in very narrow domain. In that respect,
      we endeavor to all round excel in HR recruitment, Software IP development, project management and cloud Infra configuration.
      In that regard, we are value creators for our dedicated clients on contractual basis only.</p> <br/><br/>
       <div className="llink">
       <a href="http://localhost:8080" target="_self">CONTACT US</a>
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
    <h2 className="ttext">OUR SERVICES</h2><br/><br/>
    <h4>Software Development</h4><br/><br/>
    <p>Specialist in Java/NodeJs/React/ Html5/Postman / Maven / Hibernate/ Spring Boot / JavaScript </p><br/>
    <h4>Database management and Cloud Services</h4><br/><br/>
    <p>MySql , Sql Server , Postgres, Google cloud, Azure (  currently pursuing course of study ) </p><br/>
    <h4>Blockchain</h4><br/><br/>
    <p>Hyper ledger medium proficiency, Ethereum (currently pursuing course of study).</p><br/>
    

    <h4>IT recruitment</h4>
     <br/><br/>

     <p>A New business process requested by a new client.  In the current It < br />resource market,
     companies want to cut the clutter and hire seriously < br />talented and skilled resources. Skilled HR recruitment can make or break a project!</p>
     <br/>
     <div  className="simg"><br/><br/>
     <div  className="ttext1">Reviews</div><br/><br/>
     <div  className="ttext">Reviews Coming Soon!</div>
     </div>
    </div>
    <Footer  />
  </div>
     
  );


const Contact = () => (
  
    <div>
      <Navbar />
      
  <div className="contact">
  <div className="ttext">FREQUENTLY ASKED QUESTIONS</div><br /><br />
  
  <p>Please contact us if you cannot find an answer to your question.</p><br /><br />
     <div className="acco">
     <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Happy to assist you even if its not work for us.</Accordion.Header>
        <Accordion.Body>
        you may send an email to troy@fin-techsolutions.com 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>11</Accordion.Header>
        <Accordion.Body>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>22</Accordion.Header>
        <Accordion.Body>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
     </div>
     <br /><br />
     <div className="ttext">CONTACT US</div><br /><br />
     <p>Let us tailor a service package that meets your needs. Tell us a little about your business, and we will get back
     to you with some ideas as soon as possible.</p><br /><br />

     <div className="coures"> <b>FinTech Solutions Pvt Limited</b><br />
     <p>Hours
     <ul>
     <li> Mon 09:00 am – 05:00 pm</li>

     <li>Tue 09:00 am – 05:00 pm</li>

     <li>Wed 09:00 am – 05:00 pm</li>

     <li>Thu 09:00 am – 05:00 pm</li>

     <li>Fri 09:00 am – 05:00 pm</li>

     <li>Sat Closed</li>

     <li>Sun Closed</li>
     <br />
     
     <li>Monday - Friday: 9am - 5pm</li>

     <li>Saturday - Sunday: Closed</li>
     </ul> 
     </p>
     </div>
    </div>
    <Footer  />
  
    </div>
  );
  

const FinTechSolutions = () => (
  <BrowserRouter>
    
    <Switch>
    <Route path="/" component={Home} exact={true} />
    <Route path="/contact" component={Contact} exact={true} />
    <Route path="/services" component={Services} exact={true} />
    <Route component={NotFoundPage} />
    </Switch>
    
    </BrowserRouter>
  
    
  );


export default FinTechSolutions;

