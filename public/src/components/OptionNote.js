import React from 'react';

const OptionNote = (props) => (
  <div className="option1">
    <p className="option__text1">{props.count}. {props.optionText1}</p>
    <button
      className="button button--link1"
      onClick={(e) => {
        props.handleDeleteOption(props.optionText1);
      }}
    >
      remove
      </button>
  </div>
);

export default OptionNote;
