import React from "react";
//import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import OptionNote from './OptionNote';

const Addnote = (props) => (
  <addnote>
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Notes</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove All
    </button>
    </div>

    {props.addnote.length === 0 && <p className="widget__message">Please Add Notes to get started!</p>}
    {
      props.addnote.map((OptionNote, index) => (
        <OptionNote
          key={OptionNote}
          optionText1={OptionNote}
          count={index + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
  </addnote>
);

export default Addnote;


  

      
            
          
          
          

