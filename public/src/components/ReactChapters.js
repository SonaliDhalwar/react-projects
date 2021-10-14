import React from 'react';
import Header from './Header.js';


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
     }

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
  
      return (
        <div>
          <Header title={title}
           subtitle={subtitle} />
           
      <div>
      <h2>Course Chapters :</h2>
      <button onClick={this.handlePick1} type="button"
      style={{ backgroundColor: 'pink' }}>chapter 1</button>
      <button onClick={this.handlePick2}>chapter 2</button>
      <button onClick={this.handlePick3}>chapter 3</button>
      <button onClick={this.handlePick4}>chapter 4</button>
      <button onClick={this.handlePick5}>chapter 5</button>
     
      </div>
      <h2><p>Some Softwares are Required for React Course.</p><p>So please Click On Requirements.</p></h2>
      <button onClick={this.handleRequirements}>
        {this.state.visibility ? 'Hide details' : 'Requirements'}
      </button>
      {this.state.visibility && (
        <div>
          <p>Text Editor, Node Js, Install Yarn</p>
              
          </div> 
      )}
        </div>
      );
           
    }
  }
