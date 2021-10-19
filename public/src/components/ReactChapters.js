import React from 'react';
import Header from './Header';
//import Action from './Action';
//import Accordion from './Accordion';
import Container3 from './Container3';
import { Container } from 'react-bootstrap';
//import { container } from 'webpack';
//import "bootstrap/dist/css/bootstrap.min.css";




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
    
    
 
  handlePick1 () {
    alert('Setting Up Environment......Installing Visual Studio Code, Node js, Yarn');
    render();
    }
    handlePick2() {
     alert('Hello React');
     render();
    }
    
    handlePick3() {
     alert('Setting Up Babel');
     render();
    }
   handlePick4() {
     alert('Exploring JSX');
     render();
    }
 
    handlePick5() {
     alert('JSX Expressions');
     render();
    }
     
  
    
    render() {
      const title = 'React Course';
      const subtitle = 'Welcome to the React World..... Here is All course Contents';
      const style ={
        fontWeight: 10,
      }
      
      return (
        <div>
          <Header title={title}
           subtitle={subtitle} />
           
      
      <h2>Course Chapters :</h2>
      <button onClick={this.handlePick1} type="button"
      style={{ backgroundColor: 'pink' }}>chapter 1</button>
      <button onClick={this.handlePick2}>chapter 2</button>
      <button onClick={this.handlePick3}>chapter 3</button>
      <button onClick={this.handlePick4}>chapter 4</button>
      <button onClick={this.handlePick5}>chapter 5</button>

      <h2><p>Some Softwares are Required for React Course.</p><p>So please Click On Requirements.</p></h2>
      <button onClick={this.handleRequirements}>
        {this.state.visibility ? 'Hide details' : 'Requirements'}
      </button>
      {this.state.visibility && (
        <div>
          <p>Text Editor, Node Js, Install Yarn</p>
          <Container3 />
          
          




              
          </div> 
        
      )}
      
      
      
        
        </div>
      
      
      );
           
    }
  
  }
