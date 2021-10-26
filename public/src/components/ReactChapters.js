import React from 'react';
import Header from './Header';
import Footer2 from './Footer2';

//import Action from './Action';

import Container3 from './Container3';
//import { Container } from 'react-bootstrap';
//import { container } from 'webpack';
import "bootstrap/dist/css/bootstrap.min.css";




export default class ReactChapters extends React.Component {
  constructor(props){
    super(props);
    this.handleRequirements = this.handleRequirements.bind(this);
    this.state = {
        visibility : false
    };
  }
  
    handleRequirements(){
      this.setState((prevState) => {
          return{
              visibility : !prevState.visibility
          };
        });
      };
  
    
    render() {
      const title = 'React Course';
      const subtitle = 'Welcome to the React World..... Here is All course Contents';
      const style ={
        fontWeight: 10,
      }
      
      return (
        <div>
        <div>
          <Header title={title}
           subtitle={subtitle} />
         </div>  
      
      
      
    <div className="remainder">
    <h2><p><b>Some Softwares are Required for React Course.</b></p>
    <p><b>So please Click On Requirements.</b></p></h2>
    <button style={{ backgroundColor: 'grey' }}onClick={this.handleRequirements}>
    {this.state.visibility ? 'Hide details' : 'Requirements'}
    </button>
    {this.state.visibility && (
    <div>
      <p>Text Editor, Node Js, Install Yarn</p>  
      <p></p>
    </div> 
    
    )}    
    </div>

     <div>
      <Container3 />
     </div>
     <div>
     <Footer2 />
     </div>

  </div>
      
      
      );
    }
  }
